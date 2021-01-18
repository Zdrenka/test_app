#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestAppStack } from '../lib/test_app-stack';

const app = new cdk.App();
new TestAppStack(app, 'TestAppStack');
