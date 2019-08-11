# mock-342

a simple mock api server demonstrating image processing...

## usage

- `yarn install`
- `yarn dev` - _uses nodemon, see below_

```
➜  mock-342 git:(master) yarn dev
yarn run v1.17.3
$ nodemon server
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
-- imageMax:  7
-- imageIds:  [ '018', '001', '022', '008', '006', '026', '007' ]
Magic happens here -- http://localhost:8180
--
```

## tests

- `yarn test` - _run tests, single pass_
- `yarn ct` - _run tests, continuously_
- `yarn coverage` - _run coverage report_

```
➜  mock-342 git:(master) yarn coverage
yarn run v1.17.3
$ nyc mocha
-- imageMax:  12
-- imageIds:  [ '009',
  '014',
  '020',
  '010',
  '011',
  '012',
  '008',
  '017',
  '023',
  '003',
  '025',
  '019' ]


  app router test suite
    createRouter
      ✓ should be a function
    api test suite
      GET: api
        ✓ should respond to api with object
      GET: api/slug
        ✓ should respond to api/slug with string
      GET: api/ssns
        ✓ should respond to api/ssns with array
      GET: api/ssns?count=7
        ✓ should respond to api/ssns?count=7 with array
      GET: api/uuid
        ✓ should respond to api/uuid with string
      GET: api/vins
        ✓ should respond to api/vins with array
      GET: api/vins?count=12
        ✓ should respond to api/vins?count=12 with array
      GET: api/image
        ✓ should respond to api/image with object
      GET: api/image/1
        ✓ should respond to api/image/1  (114ms)
      GET: api/image/1?thumb=true
        ✓ should respond to api/image/1?thumb=true  (38ms)
      GET: api/image/2
        ✓ should respond to api/image/2  (74ms)
      GET: api/image/2?thumb=true
        ✓ should respond to api/image/2?thumb=true
      GET: api/image/3
        ✓ should respond to api/image/3  (77ms)
      GET: api/image/42
        ✓ should respond to api/image/42 with object
      GET: api/chen/1
        ✓ should respond to api/chen/1  (75ms)
      GET: api/chen/1?thumb=true
        ✓ should respond to api/chen/1?thumb=true
      GET: api/chen/20
        ✓ should respond to api/chen/20
      GET: api/chen/20?thumb=true
        ✓ should respond to api/chen/20?thumb=true  (39ms)
      GET: api/chen/28
        ✓ should respond to api/chen/28  (72ms)
      GET: api/chen/28?thumb=true
        ✓ should respond to api/chen/28?thumb=true
      GET: api/chen/42
        ✓ should respond to api/chen/42 with object


  22 passing (700ms)

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |      100 |      100 |      100 |      100 |                   |
 mock.js   |      100 |      100 |      100 |      100 |                   |
 router.js |      100 |      100 |      100 |      100 |                   |
 utils.js  |      100 |      100 |      100 |      100 |                   |
-----------|----------|----------|----------|----------|-------------------|
✨  Done in 3.90s.
```

## dependencies

- [Chai][chai-js] - _a BDD / TDD assertion library_
- [Chai-HTTP][chai-io] - _HTTP integration testing with Chai assertions._
- [Chance][chance-js]
- [Faker][faker-js]
- [Istanbul][ist-js] - _JavaScript test coverage made simple_
- [Mocha][mocha-js] - _a JavaScript test framework_
- [node-cache][node-cache] - _simple in memory caching_
- [nodemon][nodemon-io] - _reload, automatically_
- [nyc][nyc-js] - _the Istanbul command line interface_
- [Sharp][sharp-js] - _high performance Node.js image processing_
- [Sinon][sinon-js] - _test spies, stubs and mocks_
- [vin-generator][vin-gen]






[chai-js]: https://www.chaijs.com/
[chai-io]: https://www.chaijs.com/plugins/chai-http/
[chance-js]: https://chancejs.com/
[faker-js]: https://github.com/marak/Faker.js/
[ist-js]: https://istanbul.js.org/
[mocha-js]: https://mochajs.org/
[node-cache]: http://mpneuried.github.io/nodecache/
[nodemon-io]: https://nodemon.io/
[nyc-js]: https://github.com/istanbuljs/nyc
[sharp-js]: https://sharp.pixelplumbing.com/en/stable/
[sinon-js]: https://sinonjs.org/
[vin-gen]: https://github.com/ArchmageInc/vin-generator


