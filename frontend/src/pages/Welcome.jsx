import React from 'react';

export default function Welcome({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 -z-0 w-72 h-72 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="z-10 max-w-2xl space-y-8">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          Karir Impian, <br />
          <span className="text-indigo-500">Satu Langkah Lagi.</span>
        </h1>

        <p className="text-lg text-slate-400">
          Selamat datang di CareerMatch. Platform cerdas untuk memetakan potensi dirimu dan menghubungkannya dengan peluang karir terbaik di tahun 2026.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            Masuk ke Dashboard
          </button>
          <button 
            onClick={() => onNavigate('test')}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-2xl border border-slate-700 transition-all"
          >
            Mulai Tes MBTI
          </button>
        </div>
      </div>
      
      {/* Footer info kecil */}
      <p className="mt-12 text-slate-500 text-sm">
        Didukung oleh teknologi CareerMatch Enterprise
      </p>
    </div>
  );
}