import React, { useState, useMemo, useRef } from 'react';
import { Head } from '@inertiajs/react';

export default function CareerMatchSystem() {
    const [section, setSection] = useState('splash');
    const [user, setUser] = useState({ name: 'Cia User', email: 'cia@design.com', mbti: 'INFJ' });
    const [search, setSearch] = useState('');
    const [notifs, setNotifs] = useState([
        { id: 1, title: 'Sistem Inisialisasi', desc: 'Matriks 2026 telah dimuat.' },
        { id: 2, title: 'Rekomendasi Karir', desc: 'Berdasarkan MBTI, posisi Designer cocok untuk Anda.' }
    ]);

    // --- DATABASE 40 LOWONGAN KERJA ENTERPRISE ---
    const jobsDatabase = useMemo(() => {
        const companies = ['Figma Labs', 'Gojek Tech', 'Tokopedia', 'Halodoc', 'Ruangguru', 'BCA', 'Ismaya', 'Ogilvy'];
        const roles = ['UI/UX Designer', 'Frontend Engineer', 'Data Analyst', 'Product Manager', 'Marketing Lead', 'Finance Officer'];
        return Array.from({ length: 40 }, (_, i) => ({
            id: i + 1,
            title: roles[i % roles.length],
            company: companies[i % companies.length],
            salary: 8000000 + (i * 450000),
            location: i % 2 === 0 ? 'Jakarta' : 'Remote',
            type: 'Full-time',
            desc: 'Bertanggung jawab penuh atas manajemen strategis pilar divisi digital. Anda akan memimpin kolaborasi lintas fungsional untuk membangun skalabilitas produk internasional.',
            req: 'Pengalaman min. 2 tahun, menguasai React, Tailwind, dan memiliki portofolio yang dapat diverifikasi.'
        }));
    }, []);

    // --- LOGIKA SCORING KLINIS MBTI ---
    const mbtiQuestions = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        text: `Instrumen Penilaian Wave ${Math.floor(i / 10) + 1}: Apakah Anda lebih mengutamakan ${i % 2 === 0 ? 'Logika Objektif' : 'Intuisi Kreatif'}?`
    }));

    return (
        <div className="min-h-screen bg-[#FFF5F7] text-gray-900 font-['Plus_Jakarta_Sans']">
            <style>{`
                .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); }
                .hover-up { transition: 0.3s; }
                .hover-up:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(255, 77, 141, 0.15); }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF4D8D; border-radius: 10px; }
            `}</style>

            {/* NAVBAR */}
            {section !== 'splash' && (
                <nav className="sticky top-0 z-50 glass p-4 flex justify-between items-center shadow-sm">
                    <h1 className="font-black text-lg">Career<span className="text-[#FF4D8D]">Match</span></h1>
                    <div className="flex gap-4">
                        {['home', 'dashboard', 'settings'].map(item => (
                            <button key={item} onClick={() => setSection(item)} className="text-[9px] font-black uppercase tracking-widest">{item}</button>
                        ))}
                    </div>
                </nav>
            )}

            {/* MAIN CONTENT AREA */}
            <main className="max-w-md mx-auto p-6 space-y-8">
                {section === 'splash' && (
                    <div className="h-[80vh] flex flex-col justify-center items-center text-center">
                        <div className="w-28 h-28 bg-gradient-to-tr from-[#FF4D8D] to-[#FF85A7] rounded-[40px] mb-8 shadow-2xl flex items-center justify-center text-4xl animate-bounce">🔮</div>
                        <h1 className="text-5xl font-black mb-4 leading-tight">Mulai Karir <br/><span className="text-[#FF4D8D]">Impianmu</span></h1>
                        <p className="text-gray-500 mb-8 text-sm">Ekosistem rekrutmen analitis berbasis kecocokan karakter psikologi.</p>
                        <button onClick={() => setSection('signup')} className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition">Mulai Tes Sekarang</button>
                    </div>
                )}

                {section === 'home' && (
                    <div className="animate-in fade-in duration-500 space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-black">Halo, {user.name} 👋</h2>
                            <span className="text-[10px] bg-pink-100 text-[#FF4D8D] px-3 py-1 rounded-full font-bold">MBTI: {user.mbti}</span>
                        </div>
                        
                        <input 
                            className="w-full p-4 rounded-2xl border border-pink-100 shadow-sm"
                            placeholder="Cari lowongan (e.g. Designer)..."
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <div className="space-y-4">
                            {jobsDatabase.filter(j => j.title.toLowerCase().includes(search.toLowerCase())).map(job => (
                                <div key={job.id} className="glass p-6 rounded-3xl hover-up border border-pink-50">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-2xl">💼</span>
                                        <span className="text-[10px] font-bold text-gray-400">{job.location}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-800">{job.title}</h3>
                                    <p className="text-[10px] text-gray-500 mb-4">{job.company}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-black text-[#FF4D8D]">IDR {(job.salary/1000000).toFixed(1)} Jt</span>
                                        <button className="bg-gray-900 text-white text-[10px] px-4 py-2 rounded-xl font-bold">Apply</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {section === 'test' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black">Analisis Klinis</h2>
                        {mbtiQuestions.map(q => (
                            <div key={q.id} className="glass p-5 rounded-2xl border border-pink-50">
                                <p className="text-sm font-semibold mb-4">{q.text}</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 bg-pink-100 rounded-lg text-xs font-bold">Ya</button>
                                    <button className="flex-1 py-2 bg-gray-100 rounded-lg text-xs font-bold">Tidak</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}