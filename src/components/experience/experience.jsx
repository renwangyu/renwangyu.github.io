import React from 'react';
import classnames from 'classnames';
import data from './data.json';

function Record(props) {
  const { nickname, name, logo, link, startTime, endTime, position } = props.info;

  return (
    <div className="comp-experience-record">
      <a href={link} target="_blank">
        <img src={logo} alt={nickname} className="comp-experience-record_logo"/>
      </a>
      <div className="comp-experience-record_info">
        <div className="info-name" data-name={name}>{nickname}</div>
        <div>{position}</div>
        <div>{`${startTime} —— ${endTime}`}</div>
        <div></div>
      </div>
    </div>
  )
}

function Experience(props) {
  const { className } = props;
  const { jobs } = data;
  
  return (
    <div className={classnames('comp-experience', className)}>
      <div className="comp-experience_wrap">
      {
        jobs.map(job => {
          const {
            nickname,
            company: name,
            companyLogo: logo,
            link,
            startTime,
            endTime,
            position
          } = job;
          const info = {
            name,
            nickname,
            logo,
            link,
            startTime,
            endTime,
            position
          };
          return (
            <Record key={nickname} info={info} />
          );
        })
      }
      </div>
    </div>
  )
}

export default Experience;
