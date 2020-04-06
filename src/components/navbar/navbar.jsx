import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

const isZH = (navigator.language || navigator.userLanguage).substr(0, 2).toLowerCase() === 'zh';

function Navbar(props) {
  const { className } = props;

  return (
    <article className={classnames('comp-navbar', className)}>
      <div className="comp-navbar_aboutme">
        { isZH ? '自我介绍' : 'About me' }
      </div>

      <div className="comp-navbar_works">
        { isZH ? '工作经历' : 'Works' }
      </div>

      <div className="comp-navbar_contact">
        { isZH ? '联系方式' : 'Contact' }
      </div>
    </article>
  );
}

export default Navbar;
