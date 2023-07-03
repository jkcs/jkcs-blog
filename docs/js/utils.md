# 一些好用的js代码
这里仅记录一些好用的js函数或者代码片段，不做详细介绍，就当是自己的备忘录。

## 重试函数
```javascript
// 重试函数，设定重试次数的重试函数
function tryRun(fn, times = 3) {
  let execCount = 1;

  fn(next);

  function next(delay) {
    if (execCount >= times) return;
    setTimeout(() => {
      execCount += 1;
      fn(next);
    }, delay);
  }
}

// 重试函数，设定重试时间的重试函数，超过时间就不再重试
function tryRunWithMS(fn, ms) {
  const startTime = Date.now();

  fn(next);

  function next(delay) {
    setTimeout(() => {
      if (Date.now() - startTime > ms) return;
      fn(next);
    }, delay);
  }
}

// 使用
tryRun((next) => {
  if (Math.random() > 0.5) {
    console.log('run success');
  } else {
    console.log('run fail');
    // 1秒后重试
    next(1000);
  }
});
```
