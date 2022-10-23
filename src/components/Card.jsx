import React from 'react';

const Card = ({
  nama_lengkap,
  nama_panggilan,
  nomor_telepon,
  id_line,
  nim,
  email,
  hobi,
}) => {
  return (
    <div
      style={{
        marginBottom: '2rem',
        background: '#4F2ED0',
        padding: '12px 26px',
        width: '100%',
        borderRadius: '8px',
        color: 'white',
      }}
    >
      <h2>{nama_lengkap}</h2>
      <p>{nama_panggilan}</p>
      <p>{nomor_telepon}</p>
      <p>{id_line}</p>
      <p>{nim}</p>
      <p>{email}</p>
      <p>{hobi}</p>
    </div>
  );
};

export default Card;
