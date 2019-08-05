// mock-api.test.js
// cSpell:ignore ssns

const mocha = require('mocha')
const chai = require('chai')
const sinon = require('sinon')

const { describe, it } = mocha
const { expect } = chai

const { delay, respondTo } = require('../api/utils')

const fakeApi = {
  status: 200,
  header: { 'x-fake': 42 },
  data: { id: 42 },
}

const header = sinon.spy()
const status = sinon.spy()
const json = sinon.spy()

const res = {
  header: (key, value) => {
    header(key, value)
    return res
  },
  status: code => {
    status(code)
    return res
  },
  json: data => {
    json(data)
    return res
  },
}

describe('utils test suite', () => {
  describe('delay', () => {
    const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    tests.forEach(step => {
      const value = delay()
      it(`${step}. should return a number between 500 & 3500 -- ${value}`, done => {
        expect(value).to.be.a('number')
        expect(value).to.be.within(500, 3500)
        done()
      })
    })
  })

  describe('respondTo', () => {
    it('should be a function', done => {
      expect(respondTo).to.be.a('function')
      done()
    })

    respondTo(res, fakeApi)

    it('should call header', done => {
      expect(header.callCount).to.equal(1)
      done()
    })
    it('should call status', done => {
      expect(status.callCount).to.equal(1)
      done()
    })
    it('should call json', done => {
      expect(json.callCount).to.equal(1)
      done()
    })
  })
})
