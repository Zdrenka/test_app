import * as cdk from '@aws-cdk/core';
import {
  App,
  CustomRule,
  GitHubSourceCodeProvider,
  RedirectStatus,
} from "@aws-cdk/aws-amplify";
export class TestAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const amplifyApp = new App(this, "MyApp", {
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "amplience",
        repository: "Zdrenka/test_app",
        oauthToken: cdk.SecretValue.secretsManager(
          "arn:aws:secretsmanager:eu-west-1:395026163603:secret:thundercats-github-pat-amplify-oWNvcc"
        ),
      }),
    });
    amplifyApp.addBranch("master");
  }

}
