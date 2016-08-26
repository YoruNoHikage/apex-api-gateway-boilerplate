Apex API Gateway Boilerplate
============================

Prerequisites
-------------

Install [Apex](https://github.com/apex/apex/releases) to manage your deployments to AWS Lambda

Usage
-----
Copy `project.example.json` to `project.json` and fill it with your roles and credentials.

Then execute these commands to deploy Lambda functions:  
`npm install && npm run lambda:deploy`

Then creating API by doing:  
`npm run apigateway:create`

Everytime you need to update your API:  
`npm run apigateway:update`

Now, you can try requesting your API like this:
`curl https://<id>.execute-api.<region>.amazonaws.com/dev/hello/John`

**Note:** Currently, [ESLint doesn't support path matching for the rules](https://github.com/eslint/eslint/issues/3611),
so in a better (future?) world, you'd like to put each test file along with the corresponding function obviously.
