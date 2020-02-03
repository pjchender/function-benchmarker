# Function Benchmarker

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

## LICENSE

MIT
