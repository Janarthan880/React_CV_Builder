import React from 'react';

const GeneralInfo = ({ data, onChange }) => {
  return (
    <div>
      <h2>Informations Générales</h2>
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={data.name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={onChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Numéro de téléphone"
        value={data.phone}
        onChange={onChange}
      />
    </div>
  );
};

export default GeneralInfo;