import React from 'react';

function DisplayInfo({ generalInfo, educationalInfo, practicalInfo }) {
  return (
    <div className='cvPage'>
      <h1>Submitted Information</h1>
      <div>
        <h3>General Information</h3>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>
      <div>
        <h3>Educational Information</h3>
        <p>School Name: {educationalInfo.schoolName}</p>
        <p>Study Title: {educationalInfo.studyTitle}</p>
        <p>Start Date: {educationalInfo.studyStart}</p>
        <p>End Date: {educationalInfo.studyEnd}</p>
      </div>
      <div>
        <h3>Practical Experience</h3>
        <p>Company Name: {practicalInfo.companyName}</p>
        <p>Position Title: {practicalInfo.positionTitle}</p>
        <p>Responsibilities: {practicalInfo.responsibilities}</p>
        <p>
          Worked from {practicalInfo.startDate} to {practicalInfo.endDate}
        </p>
      </div>
    </div>
  );
}

export default DisplayInfo;
