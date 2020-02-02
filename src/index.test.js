const benchmarker = require('./index');

function jsonStringify() {
  JSON.stringify({
    foo: 'bar',
  });
}

const costTime = benchmarker(jsonStringify);
console.log('costTime', costTime);
