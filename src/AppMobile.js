import './AppMobile.scss';
import React, { useReducer, useEffect, useState } from 'react';
import Prompt from './mobile-pages/prompt';

function AppMobile() {

  return (
    <article className="mobile-stage">
      <Prompt />
    </article>
  );
}

export default AppMobile;
