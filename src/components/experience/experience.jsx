import React from 'react';
import classnames from 'classnames';
import exprerience from './experience.json';

function Record(props) {
  const { nickname, companyLogo } = props.info;

  return (
    <div className="comp-experience_record">
      {/* <div className="comp-experience_record--logo"></div> */}
      <img src={companyLogo} alt={nickname} className="comp-experience_record--logo"/>
      <div className="comp-experience_record--info">
        
      </div>
    </div>
  )
}

function Experience(props) {
  const { className } = props;
  const { jobs } = exprerience;
  
  return (
    <div className={classnames('comp-experience', className)}>
      {
        jobs.map(job => {
          return (
            <Record info={job} />
          );
        })
      }
    </div>
  )
}

export default Experience;
