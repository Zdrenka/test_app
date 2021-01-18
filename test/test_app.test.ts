import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as TestApp from '../lib/test_app-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new TestApp.TestAppStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
