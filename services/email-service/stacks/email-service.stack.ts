import { Microservice } from '@galaxyops/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import { EmailSendCommand } from '@galaxyops/messaging-schemas';
import * as path from 'path';

export class EmailServiceStack extends cdk.NestedStack {
  microservice: Microservice;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // setup ses
    const SES_ACCOUNT = this.account;
    const SES_RECIPIENTS_ALLOWED = '*';
    const SES_REGION = this.region;

    // deploy lambda
    this.microservice = new Microservice(this, 'email-service-stack', {
      // path: 'email-message',
      projectRoot: path.join(__dirname, '..'),
    });

    // add permissions to send emails
    const nodeJsFunction = this.microservice.getNodeJsFunction();
    nodeJsFunction.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'ses:SendEmail',
          'ses:SendRawEmail',
          'ses:SendTemplatedEmail',
        ],
        resources: [
          `arn:aws:ses:${SES_REGION}:${SES_ACCOUNT}:identity/${SES_RECIPIENTS_ALLOWED}`,
        ],
      }),
    );
  }
}

// TODO should be a queue to already existing topic
// SendEmailCommandTopic
// const sendEmailCommandTopic = new sns.Topic(
//   this,
//   'email-send-command-topic',
//   {
//     topicName: EmailSendCommand.topicName(),
//     displayName: EmailSendCommand.topicName(),
//   },
// );
// sendEmailCommandTopic.addSubscription(
//   new subscriptions.LambdaSubscription(nodeJsFunction),cd .
// );

// new cdk.CfnOutput(this, 'endEmailCommandTopicARN', {
//   value: sendEmailCommandTopic.topicArn,
// });
