import { Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';

export class PlayerAchievementsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const microservice = new Microservice(this, 'player-achievements', {
      path: 'player-achievements',
      projectRoot: path.join(__dirname, '..'),
    });

    new cdk.CfnOutput(this, 'Localhost API Example', {
      value: `${microservice.getBaseUrl()}`,
    });
  }
}
