# Function Benchmarker

[![Build status](https://badgen.net/travis/pjchender/react-use-opentok)](https://travis-ci.com/pjchender/react-use-opentok)
[![version](https://img.shields.io/npm/v/@pjchender/function-benchmarker.svg)](https://www.npmjs.com/package/@pjchender/function-benchmarker)
[![Coverage Status](https://coveralls.io/repos/github/pjchender/function-benchmarker/badge.svg?branch=master)](https://coveralls.io/github/pjchender/function-benchmarker?branch=master)

A simple benchmark for testing function performance. Through the package, you can compare the cost time of different functions.

## Guide

Import '@pjchender/function-benchmarker` and make the function you want to test as a parameter. Function-benchmarker will return the cost time executing the function in milliseconds.

```js
const benchmarker = require('@pjchender/function-benchmarker');

function jsonStringify() {
  JSON.stringify({
    foo: 'bar',
  });
}

const costTime = benchmarker(jsonStringify);
console.log('costTime', costTime);
```

## API

By default, function-benchmarker will run the function to test for 1,000,000 times and calculate the cost time (ms). You can pass the times for executing the function as the second parameter.

```js
const costTime = benchmarker(functionToTest, [times]);
```

## Test

```bash
$ npm test
```

## Reference

- [Measuring the Performance of JavaScript Functions](https://felixgerschau.com/measuring-the-performance-of-java-script-functions)

## LICENSE

MIT
