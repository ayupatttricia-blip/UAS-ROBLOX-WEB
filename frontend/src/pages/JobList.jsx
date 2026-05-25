import React from 'react';

export default function JobList() {
  // Simulasi 300 data lowongan kerja
  const jobs = Array.from({ length: 300 }, (_, i) => ({
    id: i + 1,
    title: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Data Analyst', 'HR Specialist'][i % 5],
    company: ['TechCorp', 'Inovasi Digital', 'Global Solutions', 'StartUp Indonesia'][i % 4],
    city: ['Jakarta', 'Surabaya', 'Malang', 'Bandung', 'Medan', 'Yogyakarta'][i % 6],
    salary: `Rp ${10 + (i % 20)} Juta`,
    desc: "Membangun sistem aplikasi skala nasional dengan teknologi modern dan lingkungan kolaboratif."
  }));

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#1e1e4f' }}>Lowongan Kerja Tersedia ({jobs.length}+)</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {jobs.map(job => (
          <div key={job.id} style={{ 
            padding: '20px', 
            border: '1px solid #eee', 
            borderRadius: '16px', 
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#1e1e4f' }}>{job.title}</h3>
            <p style={{ color: '#f8a5b3', fontWeight: 'bold', margin: '5px 0' }}>{job.company} • {job.city}</p>
            <p style={{ fontSize: '14px', color: '#666', margin: '10px 0' }}>{job.desc}</p>
            <div style={{ fontWeight: 'bold', color: '#333' }}>Gaji: {job.salary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}