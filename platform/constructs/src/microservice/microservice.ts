import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Stack } from 'aws-cdk-lib';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { NestJs } from '../nestjs/nestjs';
import { EnvironmentType } from '../nestjs/environment.type';

export interface MicroserviceProps {
  projectRoot: string;
  memorySize?: number;
  layers?: lambda.ILayerVersion[];
  role?: IRole;
  environment?: EnvironmentType;
}

export class Microservice extends Construct {
  private nestJs: NestJs;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
    super(scope, id);

    const { region } = Stack.of(this);
    const stageName = 'default';
    // const apiId = ssm.StringParameter.fromStringParameterAttributes(
    //   scope,
    //   'rest-api-id-ssm',
    //   {
    //     parameterName: 'web-api-gateway-rest-api-id',
    //   },
    // ).stringValue;

    const lambdaLayerNestJsLatestVersion = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'lambda-layer-nestjs-latest-version-ssm',
      {
        parameterName: 'LAMBDA_LAYER_VERSION_NESTJS',
      },
    ).stringValue;

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: lambdaLayerNestJsLatestVersion,
      },
    );

    let lambdaLayers: lambda.ILayerVersion[] = [];
    if (props.layers !== undefined) {
      lambdaLayers = props.layers;
    }
    lambdaLayers.push(nestJsAppLayer);

    this.nestJs = new NestJs(scope, `${id}-nestjs`, {
      projectRoot: props.projectRoot,
      region,
      stageName,
      memorySize: props.memorySize,
      environment: props.environment,
      layers: lambdaLayers,
      role: props.role,
    });
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nestJs.getNodeJsFunction();
  }
}
