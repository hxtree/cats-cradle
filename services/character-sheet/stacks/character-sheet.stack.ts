import { Microservice, LambdaDomainName } from '@galaxyops/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';

export class CharacterSheetStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const stageName = process.env.STAGE_NAME ?? 'default';

    const microservice = new Microservice(this, 'character-sheet-stack', {
      projectRoot: path.join(__dirname, '..'),
    });

    const apiEndpoint = new LambdaDomainName(this, `${id}-api-endpoint`, {
      proxyLambda: microservice.getNodeJsFunction(),
      stageName,
      subdomainName: 'character-sheets',
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/health`,
    });
  }
}
