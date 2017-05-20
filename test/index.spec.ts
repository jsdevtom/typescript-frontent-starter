import { go } from '../src/scripts/mod'
import { expect } from 'chai'
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    expect(go).to.equal('GO')
  })
})