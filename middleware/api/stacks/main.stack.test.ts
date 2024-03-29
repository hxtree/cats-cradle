import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MainStack } from './main.stack';

describe('MainStack', () => {
  it('should match snapshot test', () => {
    const app = new cdk.App();
    const stack = new MainStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    // TODO consider reworking to use DNS instead of incrementing and deploying each time
    const customSnapshotSerializer = {
      test: (val: any) => typeof val === 'string',
      print: (val: any) => val.replace(/deployment\d{8}T\d{9}Z[^:]+/, 'deployment_UNIQUE_HASH'),
    };
    expect.addSnapshotSerializer(customSnapshotSerializer);

    expect(template).toMatchSnapshot();
  });
});
