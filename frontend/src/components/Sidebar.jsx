import React from 'react';

export default function Sidebar({ setCurrentPage, onLogout }) {
  const itemStyle = { padding: '15px 20px', cursor: 'pointer', color: 'white', borderBottom: '1px solid #2d2d63' };
  
  return (
    <div style={{ width: '250px', background: '#1e1e4f', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ color: '#f8a5b3', padding: '20px' }}>CAREERMATCH</h2>
      <div style={itemStyle} onClick={() => setCurrentPage('dashboard')}>Dashboard Utama</div>
      <div style={itemStyle} onClick={() => setCurrentPage('profile')}>Data Diri</div>
      <div style={itemStyle} onClick={() => setCurrentPage('tes')}>Tes MBTI</div>
      <div style={itemStyle} onClick={() => setCurrentPage('jobs')}>Lowongan Kerja</div>
      
      <div style={{ marginTop: 'auto', padding: '20px' }}>
        <button onClick={onLogout} style={{ width: '100%', padding: '10px', background: '#f8a5b3', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </div>
  );
}