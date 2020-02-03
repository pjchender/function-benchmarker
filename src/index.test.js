const benchmarker = require('./index');

describe('test function-benchmarker', () => {
  // 檢驗函式執行了 100 萬次（預設），而且回傳的 costTime 是數值格式
  it('run default times (1000000)', () => {
    const mockFn = jest.fn();
    const costTime = benchmarker(mockFn);

    expect(mockFn).toHaveBeenCalledTimes(1000000);
    expect(costTime).toEqual(expect.any(Number));
  });

  // 檢驗函式執行了 1000 次，而且回傳的 costTime 是數值格式
  it('run with 1000 times', () => {
    const mockFn = jest.fn();
    const costTime = benchmarker(mockFn, 1000); // 設定執行的次數

    expect(mockFn).toHaveBeenCalledTimes(1000);
    expect(costTime).toEqual(expect.any(Number)); // 回傳的 costTime 會是數字
  });

  // 檢驗當參數不是函數時會拋出錯誤
  it('throw error when not provide a function', () => {
    const mockFn = 'THIS_IS_NOT_A_FUNCTION';
    expect(() => benchmarker(mockFn)).toThrow();
  });
});
