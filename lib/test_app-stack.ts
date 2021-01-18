import * as cdk from '@aws-cdk/core';
import {
  App,
  CustomRule,
  GitHubSourceCodeProvider,
  RedirectStatus,
} from "@aws-cdk/aws-amplify";

import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
export class TestAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const amplifyApp = new App(this, "MyApp", {
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "zdrenka",
        repository: "test_app",
        oauthToken: cdk.SecretValue.secretsManager(
          "arn:aws:secretsmanager:eu-west-1:395026163603:secret:karls-secret-DONT-steal-8RYFW5"
        ),
      }),
    });
    amplifyApp.addBranch("master");

    new cloudfront.Distribution(this, "myDist", {
      defaultBehavior: { origin: new origins.HttpOrigin(`master.${amplifyApp.appId}.amplifyapp.com`)},
    });
  }

}
