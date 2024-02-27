import React from 'react';

function DisplayInfo({ generalInfo, educationalInfo, practicalInfo }) {
  const renderResponsibilities = (responsibilities) => {
    const responsibilitiesArray = responsibilities
      .split(',')
      .map((item) => item.trim());

    return responsibilitiesArray.map((responsibility, index) => (
      <li key={index}>{responsibility}</li>
    ));
  };

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
        <div className='infosection'>
          <h3 className='pink separator'>Educational Information</h3>
          <p>
            <b>{educationalInfo.studyTitle}</b> <span className='pink'>◆</span>{' '}
            <em>{educationalInfo.schoolName}</em>
          </p>
          <p>
            <em>
              {educationalInfo.studyStart} - {educationalInfo.studyEnd}
            </em>
          </p>
        </div>
        <div className='infosection'>
          <h3 className='pink separator'>Practical Experience</h3>
          <p>
            <b>{practicalInfo.positionTitle}</b> <span className='pink'>◆</span>{' '}
            {practicalInfo.companyName}
          </p>
          <p>
            <em>
              {practicalInfo.startDate} to {practicalInfo.endDate}
            </em>
          </p>
          <ul>{renderResponsibilities(practicalInfo.responsibilities)}</ul>
        </div>
      </main>
    </div>
  );
}

export default DisplayInfo;
