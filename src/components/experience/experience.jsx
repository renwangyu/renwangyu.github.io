import React, { useContext } from 'react';
import classnames from 'classnames';
import data from './data.json';
import storeContext from 'src/redux/store';

function Record(props) {
  const {
    id,
    nickname,
    name,
    logo,
    link,
    startTime,
    endTime,
    position,
    forget
  } = props.info;
  const { state, dispatch } = useContext(storeContext);

  const onViewProject = () => {
    dispatch({
      type: 'view-project',
      payload: {
        projectId: id,
      }
    });
  }

  return (
    <div className="comp-experience-record">
      <a href={link} target="_blank">
        <img src={logo} alt={nickname} className="comp-experience-record_logo"/>
      </a>
      <div className="comp-experience-record_info">
        <div className="info-name" data-name={name}>{nickname}</div>
        <div>
          <span>{position}</span>
          {
            !forget ? <span className="project-detail" onClick={onViewProject}>
                        <i className="icon-share" />项目经历
                      </span>
                    : null
          }
          {/* <span className="project-detail" onClick={onViewProject}>
            <i className="icon-share" />项目经历
          </span> */}
        </div>
        <div>{`${startTime} —— ${endTime}`}</div>
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
            id,
            nickname,
            company: name,
            companyLogo: logo,
            link,
            startTime,
            endTime,
            position,
            forget = false,
          } = job;
          const info = {
            id,
            name,
            nickname,
            logo,
            link,
            startTime,
            endTime,
            position,
            forget
          };
          return (
            <Record key={id} info={info} />
          );
        })
      }
      </div>
    </div>
  )
}

export default Experience;
