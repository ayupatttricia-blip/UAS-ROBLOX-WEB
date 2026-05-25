import React from 'react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FFFDFE] font-sans text-[#1D1D1F] selection:bg-[#FFD1DC]/30 relative overflow-hidden">
      
      {/* 1. DEKORASI BACKGROUND (Soft Blur Gradients) */}
      <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#FFD1DC] rounded-full blur-[140px] opacity-40 -z-10"></div>
      <div className="absolute bottom-[0px] right-[-100px] w-[400px] h-[400px] bg-[#E0EFFF] rounded-full blur-[120px] opacity-50 -z-10"></div>
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFF3B8] rounded-full blur-[100px] opacity-30 -z-10"></div>

      {/* 2. NAVBAR (Sticky & Glassmorphism) */}
      <nav className="sticky top-0 w-full bg-[#FFFDFE]/80 backdrop-blur-xl border-b border-[#F0F0F0] z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-3xl font-extrabold tracking-tighter text-[#1D1D1F]">
            CAREER<span className="text-[#FF8FAB]">MATCH</span>
          </div>
          <div className="hidden md:flex gap-10 text-[15px] font-medium text-[#515154]">
            <a href="#" className="hover:text-[#FF8FAB] transition-colors">Fitur</a>
            <a href="#" className="hover:text-[#FF8FAB] transition-colors">Testimonials</a>
            <a href="#" className="hover:text-[#FF8FAB] transition-colors">Pricing</a>
          </div>
          <button 
            onClick={() => onNavigate('login')}
            className="px-7 py-3 bg-[#FF8FAB] hover:bg-[#FF6D91] text-white rounded-full text-sm font-semibold transition-all shadow-md shadow-[#FF8FAB]/20 transform hover:scale-105"
          >
            Masuk / Daftar
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION (Minimalis & Engaging) */}
      <main className="max-w-7xl mx-auto px-8 pt-24 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Teks di Kiri (Kolom 1-7) */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Badge Premium */}
            <div className="px-4 py-2 rounded-full bg-[#FFF0F5] border border-[#FFD1DC] text-[#FF8FAB] text-[13px] font-bold uppercase tracking-wide mb-8">
              ✨ CareerMatch Enterprise | UAS Special Edition
            </div>

            {/* Headline Raksasa tapi Clean */}
            <h1 className="text-7xl md:text-[90px] font-extrabold mb-10 tracking-tighter leading-[1.05] text-[#1D1D1F]">
              Potensi Aslimu <br />
              Dimulai Di <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8FAB] to-[#FF6D91]">Sini.</span>
            </h1>

            {/* Subheadline yang Elegan */}
            <p className="text-[#515154] text-xl md:text-2xl max-w-xl mb-14 leading-relaxed font-light">
              Analisis psikometrik tercanggih dengan <span className="font-medium text-[#1D1D1F]">AI matching</span>, dirancang untuk menghubungkan bakat unikmu dengan karir impian tahun 2026.
            </p>

            {/* CTA Buttons - Lebih Premium */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button 
                onClick={() => onNavigate('test')}
                className="px-12 py-5 bg-[#FF8FAB] text-white font-bold rounded-2xl hover:bg-[#FF6D91] transition-all transform hover:scale-105 shadow-lg shadow-[#FF8FAB]/20"
              >
                Mulai Tes MBTI Sekarang →
              </button>
              <button className="px-12 py-5 bg-white text-[#1D1D1F] font-semibold rounded-2xl border-2 border-[#FFD1DC] hover:border-[#FF8FAB] hover:text-[#FF8FAB] transition-all">
                Pelajari Fitur AI
              </button>
            </div>
          </div>

          {/* Ilustrasi di Kanan (Kolom 8-12) - Bantu visualisasi SUPER KEREN */}
          <div className="md:col-span-5 relative mt-16 md:mt-0 flex items-center justify-center">
            {/* Kartu Profil Utama (Glassmorphism) */}
            <div className="p-8 bg-white/60 backdrop-blur-2xl rounded-[30px] border border-white/80 shadow-2xl shadow-[#FFD1DC]/30 relative z-20 w-[400px]">
              <div className="flex items-center gap-5 mb-7 border-b border-[#F0F0F0] pb-5">
                <img src="https://api.dicebear.com/8.x/avataaars/svg?seed=UAS" alt="Avatar" className="w-16 h-16 rounded-full border-4 border-white shadow-md"/>
                <div>
                  <p className="font-bold text-lg text-[#1D1D1F]">Siska Amelia, S.Psi.</p>
                  <p className="text-sm text-[#FF8FAB]">Hasil MBTI: ENFP-A</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#FFF0F5] rounded-xl text-sm font-medium text-[#FF8FAB]">Cocok: Creative Director | Startup Founder</div>
                <div className="p-4 bg-[#FFFBF0] rounded-xl text-sm font-medium text-[#FFB7C5]">Kebutuhan Peningkatan: Data Analysis</div>
              </div>
            </div>
            
            {/* Elemen Dekoratif Tambahan */}
            <div className="absolute top-[-40px] left-[-30px] w-[150px] h-[150px] bg-[#E0EFFF] rounded-3xl blur-[50px] opacity-60 -z-10"></div>
            <div className="absolute bottom-[-30px] right-[-20px] w-[180px] h-[180px] bg-[#FFF3B8] rounded-3xl blur-[60px] opacity-50 -z-10"></div>
          </div>

        </div>

        {/* 4. FITUR KUNCI (Bento Grid Style Modern) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-44">
          <div className="p-10 bg-white/50 backdrop-blur-lg rounded-[24px] border border-[#F0F0F0] hover:border-[#FFD1DC] hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-[#FFF0F5] rounded-2xl flex items-center justify-center mb-8 text-[#FF8FAB] group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-brain text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F]">AI Psychometrics</h3>
            <p className="text-[#515154] text-base leading-relaxed">Analisis mendalam dengan akurasi hingga 98.3%.</p>
          </div>

          <div className="p-10 bg-white/50 backdrop-blur-lg rounded-[24px] border border-[#F0F0F0] hover:border-[#FFD1DC] hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-[#F0F5FF] rounded-2xl flex items-center justify-center mb-8 text-[#FF8FAB] group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-briefcase text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F]">Job Matching</h3>
            <p className="text-[#515154] text-base leading-relaxed">Hubungkan profilmu dengan ribuan lowongan kerja global.</p>
          </div>

          <div className="p-10 bg-white/50 backdrop-blur-lg rounded-[24px] border border-[#F0F0F0] hover:border-[#FFD1DC] hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-[#FFF9E8] rounded-2xl flex items-center justify-center mb-8 text-[#FFB7C5] group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-chart-line text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F]">Career Roadmap</h3>
            <p className="text-[#515154] text-base leading-relaxed">Visualisasi jalur karir langkah demi langkah.</p>
          </div>

          <div className="p-10 bg-white/50 backdrop-blur-lg rounded-[24px] border border-[#F0F0F0] hover:border-[#FFD1DC] hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-[#E8FFF1] rounded-2xl flex items-center justify-center mb-8 text-[#FF8FAB] group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-file-invoice text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F]">Smart Resume</h3>
            <p className="text-[#515154] text-base leading-relaxed">Optimasi CV menggunakan AI Keywords berbasis target peran.</p>
          </div>
        </div>

      </main>

      {/* 5. FOOTER INFO */}
      <footer className="w-full bg-[#111] py-16 mt-32 text-center">
        <p className="text-[#F0F0F0]/50 text-sm">
          © 2026 CareerMatch Enterprise. Designed with 💖 by [Nama Kamu] for UAS.
        </p>
      </footer>
    </div>
  );
}