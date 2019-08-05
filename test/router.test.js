// router.test.js
// cSpell:ignore ssns
/* eslint-disable no-unused-vars */

const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')

const { createRouter } = require('../api/router')

const { describe, it } = mocha
const { expect } = chai
const should = chai.should()

chai.use(chaiHttp)

const app = express()
const router = createRouter(express)

app.use('/api', router)

describe('app router test suite', () => {
  describe('createRouter', () => {
    it('should be a function', done => {
      expect(createRouter).to.be.a('function')
      done()
    })
  })

  describe('api test suite', () => {
    const tests = [
      {
        name: '',
        type: 'object',
        props: ['message'],
        status: 200,
      },
      {
        name: '/slug',
        type: 'string',
        headers: ['x-mock-api', 'x-mock-count'],
        status: 200,
      },
      {
        name: '/ssns',
        type: 'array',
        count: 3,
        headers: ['x-mock-api', 'x-mock-count'],
        status: 200,
      },
      {
        name: '/uuid',
        type: 'string',
        headers: ['x-mock-api'],
        status: 200,
      },
      {
        name: '/vins',
        type: 'array',
        count: 3,
        headers: ['x-mock-api', 'x-mock-count'],
        status: 200,
      },
      {
        name: '/image',
        type: 'object',
        props: ['imageMax', 'imageIds'],
        status: 200,
      },
      {
        name: '/image/1',
        status: 200,
      },
      {
        name: '/image/1?thumb=true',
        status: 200,
      },
      {
        name: '/image/2',
        status: 200,
      },
      {
        name: '/image/2?thumb=true',
        status: 200,
      },
      {
        name: '/image/3',
        status: 200,
      },
      {
        name: '/image/3?thumb=true',
        status: 200,
      },
      {
        name: '/image/42',
        type: 'object',
        props: ['message'],
        status: 404,
      },
    ]

    tests.forEach(api => {
      describe(`GET: api${api.name}`, () => {
        const withType = api.type ? `with ${api.type}` : ''
        it(`should respond to api${api.name} ${withType}`, done => {
          chai
            .request(app)
            .get(`/api${api.name}`)
            .buffer()
            .end((err, res) => {
              if (err) throw err
              if (api.status) {
                res.should.have.status(api.status)
              }
              if (api.type) {
                res.body.should.be.a(api.type)
              }
              if (api.headers) {
                api.headers.forEach(header => {
                  res.headers.should.have.property(header)
                })
              }
              if (api.props) {
                api.props.forEach(prop => {
                  res.body.should.have.property(prop)
                })
              }
              if (api.count) {
                res.body.length.should.be.eql(api.count)
              }
              done()
            })
        })
      })
    })
  })
})
