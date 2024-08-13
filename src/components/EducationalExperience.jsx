import React from 'react';

const EducationalExperience = ({ data, onChange }) => {
  return (
    <div>
      <h2>Expérience Éducative</h2>
      <input
        type="text"
        name="schoolName"
        placeholder="Nom de l'école"
        value={data.schoolName}
        onChange={onChange}
      />
      <input
        type="text"
        name="titleOfStudy"
        placeholder="Titre de l'étude"
        value={data.titleOfStudy}
        onChange={onChange}
      />
      <input
        type="text"
        name="dateOfStudy"
        placeholder="Date de l'étude"
        value={data.dateOfStudy}
        onChange={onChange}
      />
    </div>
  );
};

export default EducationalExperience;