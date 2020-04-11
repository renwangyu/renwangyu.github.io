import { createContext } from 'react';

export const initState = {
  stage: 'home',
};

const storeContext = createContext(initState);

export default storeContext;
