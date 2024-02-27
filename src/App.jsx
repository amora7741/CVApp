import { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo'; // Uncomment this
import PracticalInfo from './components/PracticalInfo'; // Uncomment this
import DisplayInfo from './components/DisplayInfo';
import InfoContainer from './components/InfoContainer';

import LeftArrow from './assets/leftarrow.svg';
import RightArrow from './assets/rightarrow.svg';

function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [cvInfo, setCvInfo] = useState({
    generalInfo: {},
    educationalInfo: {},
    practicalInfo: {},
  });
  const [currentSection, setCurrentSection] = useState(0);

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

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePreviousSection = () => {
    setCurrentSection(currentSection - 1);
  };

  return (
    <>
      <InfoContainer>
        {isEditMode ? (
          <div className='forms'>
            <form onSubmit={handleSubmit}>
              {currentSection === 0 && (
                <>
                  <h1>General Info</h1>
                  <GeneralInfo
                    generalInfo={cvInfo.generalInfo}
                    onChange={(info) => handleInfoChange('generalInfo', info)}
                  />
                </>
              )}
              {currentSection === 1 && (
                <>
                  <h1>Educational Info</h1>
                  <EducationalInfo
                    educationalInfo={cvInfo.educationalInfo}
                    onChange={(info) =>
                      handleInfoChange('educationalInfo', info)
                    }
                  />
                </>
              )}
              {currentSection === 2 && (
                <>
                  <h1>Practical Experience</h1>
                  <PracticalInfo
                    practicalInfo={cvInfo.practicalInfo}
                    onChange={(info) => handleInfoChange('practicalInfo', info)}
                  />
                </>
              )}

              <div className='buttons'>
                {currentSection > 0 && (
                  <button
                    type='button'
                    onClick={handlePreviousSection}
                    className='paging'
                  >
                    <img src={LeftArrow} alt='' />
                  </button>
                )}
                {currentSection < 2 && (
                  <button
                    type='button'
                    onClick={handleNextSection}
                    className='paging'
                  >
                    <img src={RightArrow} alt='' />
                  </button>
                )}
                {currentSection === 2 && <button type='submit'>Submit</button>}
              </div>
            </form>
          </div>
        ) : (
          <div className='cvContainer'>
            <DisplayInfo {...cvInfo} />
            <button onClick={toggleEditMode}>Edit</button>
          </div>
        )}
      </InfoContainer>
    </>
  );
}

export default App;
