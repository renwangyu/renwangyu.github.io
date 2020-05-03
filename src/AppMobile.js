import './AppMobile.scss';
import React, { useReducer, useEffect, useState } from 'react';
import classnames from 'classnames';
import storeContext, { initState as store } from './redux/store';

function AppMobile() {

  return (
    <article className="stage">
      <div>Mobile renwangyu</div>
    </article>
  );
}

export default AppMobile;
