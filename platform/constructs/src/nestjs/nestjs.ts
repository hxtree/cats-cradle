import { Construct } from 'constructs';
import { Duration, Stack } from 'aws-cdk-lib';
import { LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as path from 'path';
import { readFileSync } from 'fs';
import { getBaseUrl } from '../api-endpoint/get-base-url';

export interface NestJsProps {
  projectRoot: string;
  apiId: string;
  region: string;
  stageName: string;
}

export class NestJs extends Construct {
  private nodeJsFunction: lambda.Function;

  constructor(scope: Construct, id: string, props: NestJsProps) {
    super(scope, id);

    const lambdaLayerNestJsLatestVersion =
      ssm.StringParameter.fromStringParameterAttributes(
        scope,
        'lambda-layer-nestjs-latest-version-ssm',
        {
          parameterName: 'lambda-layer-nestjs-latest-version',
        },
      ).stringValue;

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const awsAccountId = Stack.of(this).account;
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: lambdaLayerNestJsLatestVersion,
      },
    );

    // // file must already be bundled
    // const fileContent = readFileSync(
    //   path.join(props.projectRoot, 'dist', 'index.js'),
    // );
    // const script = fileContent.toString('utf-8');
    this.nodeJsFunction = new lambda.Function(this, 'NodeJsLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      // code: lambda.AssetCode(path.join(props.projectRoot, 'dist', 'index.js')),
      code: lambda.Code.fromAsset(path.join(props.projectRoot, 'dist')),
      handler: 'index.handler',
      layers: [nestJsAppLayer],
      memorySize: 1024, // 128 -- TODO reduce
      environment: {
        /**
         * Environmental variables
         * The following ENV are reserved by AWS, set by default AWS, and used
         * They are not visible in AWS Management Console under Lambda Environment
         * {@link https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html }
         *
         * AWS_REGION
         */
        AWS_ACCOUNT_ID: awsAccountId,
        STAGE_NAME: props.stageName,
        BASE_URL: getBaseUrl(props.apiId, props.region, props.stageName),
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      // deadLetterQueueEnabled: true
    });

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    // this.nodeJsFunction = new NodejsFunction(this, 'nodejsFunction', {
    //   projectRoot: process.env.PROJECT_ROOT ?? '',
    //   handler: 'handler',
    //   entry: 'src/index.ts',
    //   depsLockFilePath: `${process.env.PROJECT_ROOT}/pnpm-lock.yaml`,
    //   runtime: Runtime.NODEJS_16_X,
    //   bundling: {
    //     preCompilation: false,
    //     esbuildArgs: {
    //       '--log-limit': '0',
    //     },
    //     dockerImage: Runtime.NODEJS_16_X.bundlingImage,
    //     keepNames: true,
    //     minify: false,
    //     target: 'es2021',
    //     sourceMap: true,
  }

  getNodeJsFunction(): lambda.Function {
    return this.nodeJsFunction;
  }
}
