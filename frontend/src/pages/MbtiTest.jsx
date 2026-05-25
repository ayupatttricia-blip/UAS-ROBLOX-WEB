import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MbtiTest() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  
  const questions = [
    "Apakah kamu lebih suka bekerja dalam tim daripada sendirian?",
    "Apakah kamu lebih fokus pada detail daripada gambaran besar?",
    // Tambahkan sampai 20+ pertanyaan untuk hasil akurat
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF2F8] p-10">
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl">
        <div className="w-full bg-gray-200 h-2 rounded-full mb-10">
          <div className="bg-[#A2D2FF] h-2 rounded-full" style={{ width: `${(currentStep + 1) * 20}%` }}></div>
        </div>
        <h2 className="text-3xl font-bold mb-8">{questions[currentStep]}</h2>
        <div className="space-y-4">
          {['Sangat Setuju', 'Setuju', 'Tidak Setuju', 'Sangat Tidak Setuju'].map((opt) => (
            <button key={opt} onClick={handleNext} className="w-full p-6 border-2 border-gray-100 rounded-2xl hover:border-[#A2D2FF] transition text-left font-semibold">
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}