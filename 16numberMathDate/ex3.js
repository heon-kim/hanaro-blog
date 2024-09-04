const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const clickKorean = debounce(() => console.log("국어 수업 버튼 클릭"), 500);

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const clickMath = throttle(() => console.log("수학 수업 버튼 클릭"), 500);
