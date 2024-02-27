import { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
// import SchoolInfo from './components/SchoolInfo'; // Uncomment this
// import PracticalExperience from './components/PracticalExperience'; // Uncomment this
import DisplayInfo from './components/DisplayInfo';
import InfoContainer from './components/InfoContainer';

function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const [cvInfo, setCvInfo] = useState({
    generalInfo: {},
    schoolInfo: {},
    practicalExperience: {},
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
        {isEditMode && (
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
                <SchoolInfo
                  schoolInfo={cvInfo.schoolInfo}
                  onChange={(info) => handleInfoChange('schoolInfo', info)}
                />
              )}
              {currentSection === 2 && (
                <PracticalExperience
                  practicalExperience={cvInfo.practicalExperience}
                  onChange={(info) =>
                    handleInfoChange('practicalExperience', info)
                  }
                />
              )}

              {/* Navigation buttons */}
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
