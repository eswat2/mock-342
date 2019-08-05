# mock-x42

a simple mock api server

## usage

- `yarn install`
- `yarn dev` - _uses nodemon, see below_

```
➜  mock-imps git:(master) ✗ yarn dev
yarn run v1.17.3
$ nodemon server
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Magic happens here -- http://localhost:8180
--
```

## tests

- `yarn test` - _run tests, single pass_
- `yarn ct` - _run tests, continuously_
- `yarn coverage` - _run coverage report_

```
➜  mock-x42 git:(master) ✗ yarn coverage
yarn run v1.17.3
$ nyc mocha


  mock-api test suite
    mocks test suite
      slugGet
        ✓ data: should contain 3 words by default
        ✓ data: should contain 4 words when requested
        generalApi test suite - slug
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api slug
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as string
      ssnsGet
        ✓ data: should return 3 items by default
        ✓ data: should return 10 items when requested
        generalApi test suite - ssns
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api ssns
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as array
      uuidGet
        ✓ data: should contain dashes
        ✓ data: should contain dashes -- 5
        generalApi test suite - uuid
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api uuid
          ✓ api: should return data as string
      vinsGet
        ✓ data: should return 3 items by default
        ✓ data: should return 10 items when requested
        generalApi test suite - vins
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api vins
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as array

  app router test suite
    createRouter
      ✓ should be a function
      ✓ should return an object
    api test suite
      GET: api
        ✓ should respond to api with object
      GET: api/slug
        ✓ should respond to api/slug with string
      GET: api/ssns
        ✓ should respond to api/ssns with array
      GET: api/uuid
        ✓ should respond to api/uuid with string
      GET: api/vins
        ✓ should respond to api/vins with array

  utils test suite
    delay
      ✓ 1. should return a number between 500 & 3500 -- 2731
      ✓ 2. should return a number between 500 & 3500 -- 2766
      ✓ 3. should return a number between 500 & 3500 -- 1255
      ✓ 4. should return a number between 500 & 3500 -- 798
      ✓ 5. should return a number between 500 & 3500 -- 2595
      ✓ 6. should return a number between 500 & 3500 -- 2313
      ✓ 7. should return a number between 500 & 3500 -- 2770
      ✓ 8. should return a number between 500 & 3500 -- 2801
      ✓ 9. should return a number between 500 & 3500 -- 1867
    respondTo
      ✓ should be a function
      ✓ should call header
      ✓ should call status
      ✓ should call json


  55 passing (57ms)

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |      100 |      100 |      100 |      100 |                   |
 mock.js   |      100 |      100 |      100 |      100 |                   |
 router.js |      100 |      100 |      100 |      100 |                   |
 utils.js  |      100 |      100 |      100 |      100 |                   |
-----------|----------|----------|----------|----------|-------------------|
✨  Done in 1.78s.
```

## dependencies

- [Chai][chai-js] - _a BDD / TDD assertion library_
- [Chance][chance-js]
- [Faker][faker-js]
- [Istanbul][ist-js] - _JavaScript test coverage made simple_
- [Mocha][mocha-js] - _a JavaScript test framework_
- [node-cache][node-cache] - _simple in memory caching_
- [nodemon][nodemon-io] - _reload, automatically_
- [nyc][nyc-js] - _the Istanbul command line interface_
- [Sinon][sinon-js] - _test spies, stubs and mocks_
- [supertest][super-js] - _library for testing node.js_
- [vin-generator][vin-gen]






[chai-js]: https://www.chaijs.com/
[chance-js]: https://chancejs.com/
[faker-js]: https://github.com/marak/Faker.js/
[ist-js]: https://istanbul.js.org/
[mocha-js]: https://mochajs.org/
[node-cache]: http://mpneuried.github.io/nodecache/
[nodemon-io]: https://nodemon.io/
[nyc-js]: https://github.com/istanbuljs/nyc
[sinon-js]: https://sinonjs.org/
[super-js]: https://github.com/visionmedia/supertest
[vin-gen]: https://github.com/ArchmageInc/vin-generator


