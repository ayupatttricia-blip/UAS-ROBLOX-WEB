import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1e293b] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-10 text-pink-400">
            CAREERMATCH
          </h1>

          <nav className="space-y-4">
            <p className="hover:text-pink-400 cursor-pointer">
              Dashboard Utama
            </p>
            <p className="hover:text-pink-400 cursor-pointer">Data Diri</p>
            <p className="hover:text-pink-400 cursor-pointer">Tes MBTI</p>
            <p className="hover:text-pink-400 cursor-pointer">
              Lowongan Kerja
            </p>
          </nav>
        </div>

        <button className="bg-pink-500 py-2 rounded-xl">
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* HERO */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold leading-tight">
              Potensi Aslimu <br />
              Dimulai Di <span className="text-pink-400">Sini.</span>
            </h1>

            <p className="text-gray-400 mt-4 max-w-xl">
              Analisis psikometrik dengan AI matching untuk membantu kamu
              menemukan karir impian.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-pink-500 px-6 py-3 rounded-xl">
                Mulai Tes MBTI
              </button>

              <button className="border border-gray-600 px-6 py-3 rounded-xl">
                Pelajari AI
              </button>
            </div>
          </section>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold">AI Psychometrics</h3>
                <p className="text-gray-400 mt-2">
                  Analisis mendalam dengan akurasi hingga 98.3%.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold">Job Matching</h3>
                <p className="text-gray-400 mt-2">
                  Hubungkan profilmu dengan ribuan lowongan kerja global.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold">Career Roadmap</h3>
                <p className="text-gray-400 mt-2">
                  Dapatkan jalur karir berdasarkan hasil analisismu.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-slate-900 p-6 rounded-2xl flex flex-col items-center text-center">
              <img
                src="https://i.pravatar.cc/150"
                alt="avatar"
                className="w-24 h-24 rounded-full border-4 border-pink-400 mb-4"
              />

              <h2 className="text-xl font-semibold">Siska Amelia</h2>
              <p className="text-pink-400">ENFP-A</p>

              <p className="text-gray-400 mt-3 text-sm">
                Cocok: Creative Director / Startup Founder
              </p>

              <button className="mt-6 w-full bg-pink-500 py-2 rounded-xl">
                Update Profil
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}