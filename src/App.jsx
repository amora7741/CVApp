import { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo'; // Uncomment this
import PracticalInfo from './components/PracticalInfo'; // Uncomment this
import DisplayInfo from './components/DisplayInfo';
import InfoContainer from './components/InfoContainer';

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
            <h1>CV Application</h1>
            <form onSubmit={handleSubmit}>
              {currentSection === 0 && (
                <GeneralInfo
                  generalInfo={cvInfo.generalInfo}
                  onChange={(info) => handleInfoChange('generalInfo', info)}
                />
              )}
              {currentSection === 1 && (
                <EducationalInfo
                  educationalInfo={cvInfo.educationalInfo}
                  onChange={(info) => handleInfoChange('educationalInfo', info)}
                />
              )}
              {currentSection === 2 && (
                <PracticalInfo
                  practicalInfo={cvInfo.practicalInfo}
                  onChange={(info) => handleInfoChange('practicalInfo', info)}
                />
              )}

              {currentSection > 0 && (
                <button type='button' onClick={handlePreviousSection}>
                  Previous
                </button>
              )}
              {currentSection < 2 && (
                <button type='button' onClick={handleNextSection}>
                  Next
                </button>
              )}
              {currentSection === 2 && <button type='submit'>Submit</button>}
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
