function EducationalInfo({ educationalInfo, onChange }) {
  const handleChange = (event) => {
    onChange({
      ...educationalInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className='educationalInfo'>
      <div className='fieldholder'>
        <input
          id='schoolName'
          type='text'
          name='schoolName'
          value={educationalInfo.schoolName || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='schoolName'>School Name</label>
      </div>

      <div className='fieldholder'>
        <input
          id='studyTitle'
          type='text'
          name='studyTitle'
          value={educationalInfo.studyTitle || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='studyTitle'>Study Title</label>
      </div>

      <div className='fieldholder'>
        <input
          id='studyStart'
          type='date'
          name='studyStart'
          value={educationalInfo.studyStart || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='studyStart' className='datelabel'>
          Study Start Date
        </label>
      </div>

      <div className='fieldholder'>
        <input
          id='studyEnd'
          type='date'
          name='studyEnd'
          value={educationalInfo.studyEnd || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='studyEnd' className='datelabel'>
          Study End Date
        </label>
      </div>
    </section>
  );
}

export default EducationalInfo;
