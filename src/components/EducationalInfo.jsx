function EducationalInfo({ educationalInfo, onChange }) {
  const handleChange = (event) => {
    onChange({
      ...educationalInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className='educationalInfo'>
      <input
        type='text'
        name='schoolName'
        value={educationalInfo.schoolName || ''}
        onChange={handleChange}
        placeholder='School Name'
      />
      <input
        type='text'
        name='studyTitle'
        value={educationalInfo.studyTitle || ''}
        onChange={handleChange}
        placeholder='Study Title'
      />
      <input
        type='date'
        name='studyStart'
        value={educationalInfo.studyStart || ''}
        onChange={handleChange}
      />
      <input
        type='date'
        name='studyEnd'
        value={educationalInfo.studyEnd || ''}
        onChange={handleChange}
      />
    </section>
  );
}

export default EducationalInfo;
