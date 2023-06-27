import { Construct } from 'constructs';
import { Duration, Stack } from 'aws-cdk-lib';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as path from 'path';
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

    const awsAccountId = Stack.of(this).account;

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: lambdaLayerNestJsLatestVersion,
      },
    );

    const mongoDatabaseUri = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'mongo-database-uri-ssm',
      {
        parameterName: 'MONGO_DATABASE_URI',
      },
    ).stringValue;

    const mongoDatabaseUser = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'mongo-database-user-ssm',
      {
        parameterName: 'MONGO_DATABASE_USER',
      },
    ).stringValue;

    const mongoDatabasePassword =
      ssm.StringParameter.fromStringParameterAttributes(
        scope,
        'mongo-database-password-ssm',
        {
          parameterName: 'MONGO_DATABASE_PASSWORD',
        },
      ).stringValue;

    this.nodeJsFunction = new lambda.Function(this, 'NodeJsLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
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
        MONGO_DATABASE_URI: mongoDatabaseUri,
        MONGO_DATABASE_USER: mongoDatabaseUser,
        MONGO_DATABASE_PASSWORD: mongoDatabasePassword,
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
    });
  }

  getNodeJsFunction(): lambda.Function {
    return this.nodeJsFunction;
  }
}
