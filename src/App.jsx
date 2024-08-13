import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import Preview from './components/Preview';
import './styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    education: {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
    },
    practicalExperience: {
      companyName: '',
      positionTitle: '',
      mainResponsibilities: '',
      dateFrom: '',
      dateUntil: '',
    },
  });

  const [isGenerated, setIsGenerated] = useState(false);

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, generalInfo: { ...formData.generalInfo, [name]: value } });
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, education: { ...formData.education, [name]: value } });
  };

  const handlePracticalExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, practicalExperience: { ...formData.practicalExperience, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <form onSubmit={handleSubmit}>
        <GeneralInfo data={formData.generalInfo} onChange={handleGeneralInfoChange} />
        <EducationalExperience data={formData.education} onChange={handleEducationChange} />
        <PracticalExperience data={formData.practicalExperience} onChange={handlePracticalExperienceChange} />
        {<button type="submit">Générer CV</button>}
      </form>
      {isGenerated && <Preview data={formData} />}
    </div>
  );
};

export default App;