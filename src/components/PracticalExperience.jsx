import React from 'react';

const PracticalExperience = ({ data, onChange }) => {
  return (
    <div>
      <h2>Expérience Pratique</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Nom de l'entreprise"
        value={data.companyName}
        onChange={onChange}
      />
      <input
        type="text"
        name="positionTitle"
        placeholder="Titre du poste"
        value={data.positionTitle}
        onChange={onChange}
      />
      <textarea
        name="mainResponsibilities"
        placeholder="Responsabilités principales"
        value={data.mainResponsibilities}
        onChange={onChange}
        className="practical-textarea"
      />
      <input
        type="text"
        name="dateFrom"
        placeholder="Date de début"
        value={data.dateFrom}
        onChange={onChange}
      />
      <input
        type="text"
        name="dateUntil"
        placeholder="Date de fin"
        value={data.dateUntil}
        onChange={onChange}
      />
    </div>
  );
};

export default PracticalExperience;