# mock-342

a simple mock api server demonstrating image processing...

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

## dependencies

- [Chai][chai-js] - _a BDD / TDD assertion library_
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


