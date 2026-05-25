import React, { useState } from 'react';

const QUESTIONS = [
  { id: 1, dim: 'E-I', q: "Saya lebih suka bekerja dalam tim yang dinamis daripada bekerja sendirian." },
  { id: 2, dim: 'S-N', q: "Saya lebih fokus pada detail dan fakta yang ada saat ini." },
  { id: 3, dim: 'T-F', q: "Saya lebih mengutamakan logika dan efisiensi dalam mengambil keputusan." },
  { id: 4, dim: 'J-P', q: "Saya merasa lebih tenang jika memiliki rencana yang terstruktur." },
  { id: 5, dim: 'E-I', q: "Saya merasa berenergi setelah berinteraksi dengan banyak orang." },
  { id: 6, dim: 'S-N', q: "Saya lebih tertarik pada konsep masa depan dan teori daripada rutinitas." },
  { id: 7, dim: 'T-F', q: "Saya berusaha menghindari konflik dan lebih peduli pada perasaan orang lain." },
  { id: 8, dim: 'J-P', q: "Saya lebih suka membiarkan pilihan terbuka daripada membuat jadwal yang kaku." }
];

export default function TestPage() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (val, dim) => {
    const newScores = { ...scores };
    // Skala 1 (Sangat Tidak Setuju) ke 5 (Sangat Setuju)
    // Jika dimensi E-I: 1-2 ke arah I, 4-5 ke arah E
    if (val <= 2) newScores[dim[2]] += (3 - val);
    if (val >= 4) newScores[dim[0]] += (val - 3);
    
    setScores(newScores);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setFinished(true);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto', background: 'white', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
      {!finished ? (
        <>
          <h4 style={{ color: '#f8a5b3' }}>Pertanyaan {step + 1} / {QUESTIONS.length}</h4>
          <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>{QUESTIONS[step].q}</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {[1,2,3,4,5].map(v => (
              <button key={v} onClick={() => handleAnswer(v, QUESTIONS[step].dim)} style={btnStyle}>{v}</button>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>1: Sangat Tidak Setuju - 5: Sangat Setuju</p>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>Hasil Analisis Kepribadian</h2>
          <div style={{ fontSize: '32px', fontWeight: 'black', color: '#1e1e4f', margin: '20px 0' }}>
            {scores.E >= scores.I ? 'E' : 'I'}
            {scores.S >= scores.N ? 'S' : 'N'}
            {scores.T >= scores.F ? 'T' : 'F'}
            {scores.J >= scores.P ? 'J' : 'P'}
          </div>
          <p>Berdasarkan data psikometrik, tipe ini sangat cocok untuk bidang profesional.</p>
        </div>
      )}
    </div>
  );
}

const btnStyle = { padding: '15px 20px', borderRadius: '12px', border: '1px solid #eee', cursor: 'pointer', background: '#f8f9fa' };