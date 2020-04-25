import { createContext } from 'react';

export const initState = {
  ready: false, // 资源是否加载完毕
  stage: 'sky',
};

// const storeContext = createContext(initState);
const storeContext = createContext();

export default storeContext;
