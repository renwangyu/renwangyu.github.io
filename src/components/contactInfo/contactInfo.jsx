import React, { useEffect } from 'react';
import classnames from 'classnames';

function ContactInfo(props) {
  const { className } = props;

  return (
    <article className={classnames('comp-contact-info', className)}>
      <div className="comp-contact-info_record" title="wechat">
        <i className="icon-chn-wechat"></i>
        <span className="wechat">arikaren</span>
      </div>
      <div className="comp-contact-info_record" title="QQ">
        <i className="icon-chn-tencent-03"></i>
        <span className="qq">442574518</span>
      </div>
      <div className="comp-contact-info_record" title="github">
        <i className="icon-github-01"></i>
        <span><a href="https://github.com/renwangyu" target="_blank">https://github.com/renwangyu</a></span>
      </div>
      <div className="comp-contact-info_record" title="location">
        <i className="icon-blogger"></i>
        <span><a href="https://blog.renwangyu.com/" target="_blank">https://blog.renwangyu.com/</a></span>
      </div>
      <div className="comp-contact-info_record" title="gmail">
        <i className="icon-gmail"></i>
        <span><a href="mailto:renwangyu1106@gmail.com">renwangyu1106@gmail.com</a></span>
      </div>
      <div className="comp-contact-info_record" title="email">
        <i className="icon-mail"></i>
        <span><a href="mailto:renwangyu@126.com">renwangyu@126.com</a></span>
      </div>
      <div className="comp-contact-info_record" title="facebook">
        <i className="icon-facebook"></i>
        <span><a href="https://www.facebook.com/renwangyu" target="_blank">https://www.facebook.com/renwangyu</a></span>
      </div>
      <div className="comp-contact-info_record" title="linkedin">
        <i className="icon-linkedin"></i>
        <span className="linkedin">linkedin.com/in/ren-wangyu-09130136</span>
      </div>

      <div className="current-pos">Shanghai, China</div>
    </article>
  )
}

export default ContactInfo;
