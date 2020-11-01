import { createContext } from 'react';

export const initState = {
  ready: false, // 资源是否加载完毕
  stage: 'home',
  showPanel: false,
  projectId: null,
};

// const storeContext = createContext(initState);
const storeContext = createContext();

export default storeContext;
