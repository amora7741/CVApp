import React from 'react';

function DisplayInfo({ generalInfo, educationalInfo, practicalInfo }) {
  return (
    <div className='cvpage'>
      <header>
        <hr />
        <h1 className='pink'>{generalInfo.name}</h1>
        <hr />
        <hr className='thickhr' />
        <p>
          {generalInfo.email} <span className='pink'>◆</span>{' '}
          {generalInfo.phone}{' '}
        </p>
      </header>

      <main>
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
      </main>
    </div>
  );
}

export default DisplayInfo;
