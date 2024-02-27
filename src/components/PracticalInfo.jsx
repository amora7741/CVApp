function PracticalInfo({ practicalInfo, onChange }) {
  const handleChange = (event) => {
    onChange({
      ...practicalInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className='practicalInfo'>
      <div className='fieldholder'>
        <input
          id='companyName'
          type='text'
          name='companyName'
          value={practicalInfo.companyName || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='companyName'>Company Name</label>
      </div>
      <div className='fieldholder'>
        <input
          id='positionTitle'
          type='text'
          name='positionTitle'
          value={practicalInfo.positionTitle || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='positionTitle'>Position Title</label>
      </div>
      <div className='fieldholder'>
        <input
          id='responsibilities'
          type='text'
          name='responsibilities'
          value={practicalInfo.responsibilities || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='responsibilities'>
          Responsibilities (comma separated)
        </label>
      </div>
      <div className='fieldholder'>
        <input
          id='startDate'
          type='date'
          name='startDate'
          value={practicalInfo.startDate || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='startDate' className='datelabel'>
          Start Date
        </label>
      </div>
      <div className='fieldholder'>
        <input
          id='endDate'
          type='date'
          name='endDate'
          value={practicalInfo.endDate || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor='endDate' className='datelabel'>
          End Date
        </label>
      </div>
    </section>
  );
}

export default PracticalInfo;
