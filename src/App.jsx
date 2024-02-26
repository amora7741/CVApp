import { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';

import DisplayInfo from './components/DisplayInfo';
import InfoContainer from './components/InfoContainer';

function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [cvInfo, setCvInfo] = useState({
    generalInfo: {},
    schoolInfo: {},
    practicalExperience: {},
  });

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInfoChange = (section, info) => {
    setCvInfo({
      ...cvInfo,
      [section]: info,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditMode(false);
  };

  return (
    <>
      <InfoContainer>
        {isEditMode && (
          <div className='forms'>
            <h1>CV Application</h1>
            <form onSubmit={handleSubmit}>
              <GeneralInfo
                generalInfo={cvInfo.generalInfo}
                onChange={(info) => handleInfoChange('generalInfo', info)}
              />
              {/* <SchoolInfo
                schoolInfo={cvInfo.schoolInfo}
                onChange={(info) => handleInfoChange('schoolInfo', info)}
              />
              <PracticalExperience
                practicalExperience={cvInfo.practicalExperience}
                onChange={(info) =>
                  handleInfoChange('practicalExperience', info)
                }
              /> */}
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
        {!isEditMode && (
          <div>
            <DisplayInfo {...cvInfo} />
            <button onClick={toggleEditMode}>Edit</button>
          </div>
        )}
      </InfoContainer>
    </>
  );
}

export default App;
