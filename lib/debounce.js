function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    const run = () => fn.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(run, delay);
  };
}

export default debounce;
