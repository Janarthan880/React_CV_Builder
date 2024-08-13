import React from 'react';

const Preview = ({ data }) => {
  return (
    <div className="cv-preview">
      <div className="cv-header">
        <h2>{data.generalInfo.name}</h2>
        <p>{data.generalInfo.email}</p>
        <p>{data.generalInfo.phone}</p>
      </div>
      <div className="cv-section">
        <h3>Expérience Éducative</h3>
        <div className="cv-item">
          <p className="cv-item-title">Nom de l'école:</p>
          <p>{data.education.schoolName}</p>
        </div>
        <div className="cv-item">
          <p className="cv-item-title">Titre de l'étude:</p>
          <p>{data.education.titleOfStudy}</p>
        </div>
        <div className="cv-item">
          <p className="cv-item-title">Date de l'étude:</p>
          <p className="cv-item-date">{data.education.dateOfStudy}</p>
        </div>
      </div>
      <div className="cv-section">
        <h3>Expérience Pratique</h3>
        <div className="cv-item">
          <p className="cv-item-title">Nom de l'entreprise:</p>
          <p>{data.practicalExperience.companyName}</p>
        </div>
        <div className="cv-item">
          <p className="cv-item-title">Titre du poste:</p>
          <p>{data.practicalExperience.positionTitle}</p>
        </div>
        <div className="cv-item">
          <p className="cv-item-title">Responsabilités principales:</p>
          <p>{data.practicalExperience.mainResponsibilities}</p>
        </div>
        <div className="cv-item">
          <p className="cv-item-title">Date de début:</p>
          <p className="cv-item-date">{data.practicalExperience.dateFrom}</p>
        </div>
        <div className="cv-item">
          <p className="cv-item-title">Date de fin:</p>
          <p className="cv-item-date">{data.practicalExperience.dateUntil}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;