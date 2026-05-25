import React, { useState } from 'react';

export default function AuthPage({ onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    setLoading(true);
    // Simulasi proses autentikasi (bisa diganti dengan Firebase nantinya)
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div style={containerStyle}>
      {/* Sisi Kiri: Branding Modern */}
      <div style={leftPanelStyle}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>CareerMatch <br/> Enterprise</h1>
        <p style={{ opacity: 0.8, fontSize: '18px' }}>
          Platform penilaian psikometrik dan manajemen karir terintegrasi untuk profesional masa depan.
        </p>
      </div>

      {/* Sisi Kanan: Form */}
      <div style={rightPanelStyle}>
        <div style={formBoxStyle}>
          <h2 style={{ fontSize: '28px', marginBottom: '25px', color: '#1e1e4f' }}>
            {isRegister ? 'Buat Akun Baru' : 'Selamat Datang Kembali'}
          </h2>
          
          <input type="email" placeholder="Alamat Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          
          {isRegister && (
            <input type="password" placeholder="Konfirmasi Password" style={inputStyle} />
          )}

          <button onClick={handleAction} style={buttonStyle} disabled={loading}>
            {loading ? 'Memproses...' : (isRegister ? 'Daftar Sekarang' : 'Masuk ke Dashboard')}
          </button>

          <p style={{ textAlign: 'center', marginTop: '20px', color: '#64748b' }}>
            {isRegister ? 'Sudah punya akun? ' : 'Belum punya akun? '}
            <span 
              onClick={() => setIsRegister(!isRegister)} 
              style={{ color: '#f8a5b3', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {isRegister ? 'Login' : 'Daftar'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// --- STYLING ---
const containerStyle = { display: 'flex', height: '100vh', background: '#fff' };
const leftPanelStyle = { flex: 1, background: '#1e1e4f', padding: '80px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const rightPanelStyle = { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' };
const formBoxStyle = { width: '100%', maxWidth: '400px' };
const inputStyle = { width: '100%', padding: '16px', marginBottom: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', boxSizing: 'border-box', outline: 'none' };
const buttonStyle = { width: '100%', padding: '16px', background: '#1e1e4f', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' };