/* eslint no-template-curly-in-string: 0 */
import { Construct } from 'constructs';
import {
  NestedStack, BundlingOutput, RemovalPolicy, Stack, StackProps,
} from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import {
  Architecture,
  Code,
  LayerVersion,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';
import * as child from 'child_process';

export class NestJsLayerStack extends NestedStack {
  public layerVersion: LayerVersion;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = Stack.of(this).account;
    const awsAccountRegion = Stack.of(this).region;

    // include in layer packages that are common or do not bundle well
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.BundlingOutput.html
    this.layerVersion = new LayerVersion(this, 'NestJs', {
      layerVersionName: `arn:aws:lambda:${awsAccountRegion}:${awsAccountId}:layer:NestJs`,
      compatibleArchitectures: [Architecture.X86_64, Architecture.ARM_64],
      removalPolicy: RemovalPolicy.DESTROY,
      code: Code.fromAsset('.', {
        exclude: ['*', '!package.json'],
        bundling: {
          image: Runtime.NODEJS_18_X.bundlingImage,
          command: [],
          local: {
            tryBundle(outputDir: string) {
              try {
                child.execSync('npm --version');
              } catch {
                return false;
              }

              const commands = [
                'LAYER_TMP_DIR=dist',
                'mkdir -p "${LAYER_TMP_DIR}/nodejs"',
                'cat package.json | jq \'del(.devDependencies)\' > "${LAYER_TMP_DIR}/nodejs/package.json"',
                'cd "${LAYER_TMP_DIR}/nodejs"',
                'npm install --production',
                'cd ..',
                'zip -rq layer.zip nodejs',
                `cp layer.zip ${outputDir}`,
              ];

              child.execSync(commands.join(' && '));
              return true;
            },
          },
          outputType: BundlingOutput.ARCHIVED,
        },
      }),
    });

    new ssm.StringParameter(this, 'lambda-layer-nestjs-latest-version', {
      description: 'NestJS Lambda Layer Latest Version',
      parameterName: 'LAMBDA_LAYER_VERSION_NESTJS',
      stringValue: this.layerVersion.layerVersionArn,
    });
  }
}
