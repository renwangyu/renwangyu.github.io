import React from 'react';
import classnames from 'classnames';
import PureTextOutput from 'src/components/pureTextOutput';
import ProgressBar from 'src/components/progressBar';

const nameDelay = 0;
const nickDelay = nameDelay + 16;
const sexDelay = nickDelay + 10;
const birthdayDelay = sexDelay + 9;
const jobDelay = birthdayDelay + 4;
const selfDelay = jobDelay + 10;

function Introduce(props) {
  const { className } = props;

  return (
    <article className={ classnames('comp-introduce', className) }>
      <div className="self-info">
        <p>姓名：<em><PureTextOutput value="任旺瑜（renwangyu）" show={true} /></em></p>
        <p>昵称：<em><PureTextOutput value="爆爆（bomb）" show={true} delay={nickDelay} /></em></p>
        <p>性别：<em><PureTextOutput value="理工男" show={true} delay={sexDelay} /></em></p>
        <p>学历：<em><PureTextOutput value="硕士" show={true} delay={birthdayDelay} /></em></p>
        <p>职业：<em><PureTextOutput value="前端攻城狮" show={true} delay={jobDelay} /></em></p>
        <span className="tag" style={{ background: '#ffb400' }}>大叔</span>
        <span className="tag" style={{ background: '#80ff00' }}>80后</span>
        <span className="tag" style={{ background: '#fd3536' }}>react</span>
        <span className="tag" style={{ background: '#1abeab' }}>vue</span>
        <span className="tag" style={{ background: '#8000ff' }}>非技术宅</span>
        <span className="tag" style={{ background: '#3699d6' }}>同济土木男</span>
        <span className="tag" style={{ background: '#ff00ff' }}><span role="img" aria-label="bomb">💣</span></span>
      </div>

      <div className="minor-part">
        <div className="other-info">
          <PureTextOutput
            value="保持童心的80后程序猿大叔，乐观开朗，幽默大方，喜欢交朋友，热衷新技术~沉迷学习，不能自拔（脸掉了）总之人品尚佳，热爱生活，热爱大家~"
            show={true}
            delay={selfDelay}
            />
        </div>
        <div className="skill-info">
          <div>
            <i className="icon-html5-01 icon" style={{ color: '#ff0000' }}></i>
            <ProgressBar className="schedule" value="70" />
          </div>
          <div>
            <i className="icon-css3-01 icon" style={{ color: '#3699d6' }}></i>
            <ProgressBar className="schedule" value="75" />
          </div>
          
          <div>
            <i className="icon-prog-js01 icon" style={{ color: '#f0d91e' }}></i>
            <ProgressBar className="schedule" value="85" />
          </div>
          <div>
            <i className="icon-prog-nodejs01 icon" style={{ color: '#8cc03c' }}></i>
            <ProgressBar className="schedule" value="60" />
          </div>
          <div>
            <i className="icon-prog-python icon" style={{ color: '#84a6d9' }}></i>
            <ProgressBar className="schedule" value="40" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Introduce;
