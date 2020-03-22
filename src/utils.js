export const noop = () => void(0);

export const getRandom = (n, m) => Math.floor(Math.random() * (m - n + 1) + n);

export const rAF = window.requestAnimationFrame || (cb => setTimeout(cb, 0));
