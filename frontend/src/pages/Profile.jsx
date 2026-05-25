import React, { useState } from 'react';
export default function Profile() {
  return (
    <div style={{ padding: '40px', background: 'white', borderRadius: '15px', maxWidth: '500px' }}>
      <h1 style={{ color: '#1e1e4f' }}>Data Diri</h1>
      <input placeholder="Nama Lengkap" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input placeholder="Usia" type="number" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} />
      <button style={{ padding: '10px 20px', background: '#f8a5b3', color: 'white', border: 'none' }}>Simpan</button>
    </div>
  );
}