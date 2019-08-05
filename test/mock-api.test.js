// mock-api.test.js
// cSpell:ignore ssns

const mocha = require('mocha')
const chai = require('chai')
const sinon = require('sinon')

const { describe, it } = mocha
const { expect } = chai
const { api, glob } = require('../api/mock')
const { slugGet, ssnsGet, uuidGet, vinsGet } = api

const generalApi = (tag, type, value, count) => {
  describe(`generalApi test suite - ${tag}`, () => {
    it('api: should be a function', done => {
      expect(slugGet).to.be.a('function')
      done()
    })

    it('api: should return an object', done => {
      expect(value).to.be.a('object')
      done()
    })

    it('api: should include 3 properties: status, header, data', done => {
      expect(value).to.have.property('status')
      expect(value).to.have.property('header')
      expect(value).to.have.property('data')
      done()
    })

    it('api: should return status set to 200', done => {
      expect(value.status).to.equal(200)
      done()
    })

    it(`api; should return header with x-mock-api ${tag}`, done => {
      expect(value.header).to.have.property('x-mock-api')
      expect(value.header['x-mock-api']).to.equal(tag)
      done()
    })

    if (count) {
      it(`api; should return header with x-mock-count ${count}`, done => {
        expect(value.header).to.have.property('x-mock-count')
        expect(value.header['x-mock-count']).to.equal(count)
        done()
      })
    }

    it(`api: should return data as ${type}`, done => {
      expect(value.data).to.be.a(type)
      done()
    })
  })
}

describe('mock-api test suite', () => {
  describe('mocks test suite', () => {
    describe('slugGet', () => {
      generalApi('slug', 'string', slugGet(), 3)

      it('data: should contain 3 words by default', done => {
        const value = slugGet().data
        const words = value.split('-')
        expect(words).to.have.lengthOf(3)
        done()
      })

      it('data: should contain 4 words when requested', done => {
        const value = slugGet(4).data
        const words = value.split('-')
        expect(words).to.have.lengthOf(4)
        done()
      })
    })

    describe('ssnsGet', () => {
      generalApi('ssns', 'array', ssnsGet(), 3)

      it('data: should return 3 items by default', done => {
        const value = ssnsGet().data
        expect(value).to.have.lengthOf(3)
        done()
      })
      it('data: should return 10 items when requested', done => {
        const value = ssnsGet(10).data
        expect(value).to.have.lengthOf(10)
        done()
      })
    })

    describe('uuidGet', () => {
      generalApi('uuid', 'string', uuidGet())

      const value = uuidGet().data
      const words = value.split('-')
      const count = words.length

      it('data: should contain dashes', done => {
        expect(value).to.include('-')
        done()
      })
      it(`data: should contain dashes -- ${count}`, done => {
        expect(words).to.not.be.empty
        done()
      })
    })

    describe('vinsGet', () => {
      generalApi('vins', 'array', vinsGet(), 3)

      it('data: should return 3 items by default', done => {
        const value = vinsGet().data
        expect(value).to.have.lengthOf(3)
        done()
      })
      it('data: should return 10 items when requested', done => {
        const value = vinsGet(10).data
        expect(value).to.have.lengthOf(10)
        done()
      })
    })
  })
})
