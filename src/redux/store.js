import { createContext } from 'react';

export const initState = {
  stage: 'atmosphere',
};

const storeContext = createContext(initState);

export default storeContext;
