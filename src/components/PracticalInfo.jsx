function PracticalInfo({ practicalInfo, onChange }) {
  const handleChange = (event) => {
    onChange({
      ...practicalInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className='practicalInfo'>
      <input
        type='text'
        name='companyName'
        value={practicalInfo.companyName || ''}
        onChange={handleChange}
        placeholder='Company Name'
      />
      <input
        type='text'
        name='positionTitle'
        value={practicalInfo.positionTitle || ''}
        onChange={handleChange}
        placeholder='Position Title'
      />
      <input
        type='text'
        name='responsibilities'
        value={practicalInfo.responsibilities || ''}
        onChange={handleChange}
        placeholder='Responsibilities'
      />
      <input
        type='date'
        name='startDate'
        value={practicalInfo.startDate || ''}
        onChange={handleChange}
      />
      <input
        type='date'
        name='endDate'
        value={practicalInfo.endDate || ''}
        onChange={handleChange}
      />
    </section>
  );
}

export default PracticalInfo;
