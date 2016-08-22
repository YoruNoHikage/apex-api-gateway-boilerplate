import lambdaTester from 'lambda-tester';
import { expect } from 'chai';

import hello from '../functions/hello/src';

describe('Hello function', () => {
  it('should say hello to a given name', () => {
    const name = 'John';

    return lambdaTester(hello)
      .event({ pathParams: { name } })
      .expectSucceed(result => {
        expect(result).to.equal(`Hello ${name}`);
      });
  });

  it('should fail saying hello to no one', () => lambdaTester(hello).event({}).expectFail());
});
