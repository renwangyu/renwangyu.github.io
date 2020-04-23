import { createContext } from 'react';

export const initState = {
  ready: false, // 资源是否加载完毕
  stage: 'home',
};

const storeContext = createContext(initState);

export default storeContext;
