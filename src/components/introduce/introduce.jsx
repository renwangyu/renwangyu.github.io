import React, { useEffect, useRef } from 'react';
import PureTextOutput from 'src/components/pureTextOutput';

const nameDelay = 0;
const nickDelay = nameDelay + 16;
const sexDelay = nickDelay + 10;
const birthdayDelay = sexDelay + 9;
const jobDelay = birthdayDelay + 4;

function Introduce(props) {
  // const textRef = useRef();

  useEffect(() => {

  });

  return (
    <article className="comp-introduce">
      <div className="self-info">
        <p>姓名：<em><PureTextOutput value="任旺瑜（renwangyu）" show={true} /></em></p>
        <p>昵称：<em><PureTextOutput value="爆爆（bomb）" show={true} delay={nickDelay} /></em></p>
        <p>性别：<em><PureTextOutput value="理工男" show={true} delay={sexDelay} /></em></p>
        <p>年龄：<em><PureTextOutput value="保密" show={true} delay={birthdayDelay} /></em></p>
        <p>职业：<em><PureTextOutput value="前端攻城狮" show={true} delay={jobDelay} /></em></p>
        <span className="tag" style={{ background: '#ffb400' }}>大叔</span>
        <span className="tag" style={{ background: '#80ff00' }}>80后</span>
        <span className="tag" style={{ background: '#8000ff' }}>非技术宅</span>
        <span className="tag" style={{ background: '#ff00ff' }}><span role="img" aria-label="bomb">💣</span></span>
      </div>

      <div className="minor-part">
        <div className="skill-info">
          <div>
            <i className="icon-html5-01 icon" style={{ color: '#ff0000' }}></i>
            会一点
          </div>
          <div>
            <i className="icon-css3-01 icon" style={{ color: '#3699d6' }}></i>
            我觉得还算可以吧
          </div>
          
          <div>
            <i className="icon-prog-js01 icon" style={{ color: '#f0d91e' }}></i>
            还算懂点皮毛
          </div>
          <div>
            <i className="icon-prog-nodejs01 icon" style={{ color: '#8cc03c' }}></i>
            还算懂点皮毛
          </div>
          <div>
            <i className="icon-prog-python icon" style={{ color: '#84a6d9' }}></i>
            好好学习天天向上
          </div>
        </div>
        <div className="other-info">
          hello world
        </div>
      </div>
    </article>
  )
}

export default Introduce;
