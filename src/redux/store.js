import { createContext } from 'react';

export const initState = {
  stage: 'sky',
};

const storeContext = createContext(initState);

export default storeContext;
