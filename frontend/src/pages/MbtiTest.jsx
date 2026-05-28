import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MbtiTest() {

  const navigate = useNavigate();

  const questions = [
    "Saya suka berada di keramaian.",
    "Saya lebih suka merencanakan sesuatu.",
    "Saya mudah berkenalan dengan orang baru.",
    "Saya lebih menggunakan logika daripada perasaan.",
    "Saya suka mencoba hal baru.",
    "Saya nyaman berbicara di depan banyak orang.",
    "Saya lebih fokus pada detail.",
    "Saya suka bekerja dalam tim.",
    "Saya lebih suka jadwal yang teratur.",
    "Saya sering mengikuti intuisi.",
    "Saya cepat mengambil keputusan.",
    "Saya suka suasana tenang.",
    "Saya mudah memahami perasaan orang lain.",
    "Saya lebih suka praktik daripada teori.",
    "Saya senang menjadi pusat perhatian.",
    "Saya suka membuat daftar rencana.",
    "Saya lebih memilih fakta daripada imajinasi.",
    "Saya mudah beradaptasi.",
    "Saya lebih nyaman bekerja sendiri.",
    "Saya suka diskusi panjang.",
    "Saya sering memikirkan masa depan.",
    "Saya lebih suka keputusan spontan.",
    "Saya peduli dengan emosi orang lain.",
    "Saya suka lingkungan kerja fleksibel.",
    "Saya lebih suka observasi daripada berbicara.",
    "Saya suka tantangan baru.",
    "Saya lebih suka kepastian.",
    "Saya suka membantu orang lain.",
    "Saya lebih suka ide kreatif.",
    "Saya menikmati pekerjaan yang terstruktur.",
  ];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [showResult, setShowResult] =
    useState(false);

  const [mbtiResult, setMbtiResult] =
    useState("");

  // RANDOM MBTI RESULT
  const mbtiTypes = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ];

  const descriptions = {
    INTJ: "Ahli strategi yang logis dan visioner.",
    INTP: "Pemikir kreatif dengan rasa ingin tahu tinggi.",
    ENTJ: "Pemimpin yang percaya diri dan tegas.",
    ENTP: "Inovatif dan suka tantangan baru.",
    INFJ: "Idealis dan penuh empati.",
    INFP: "Kreatif dan sangat peduli pada nilai hidup.",
    ENFJ: "Inspiratif dan suka membantu orang lain.",
    ENFP: "Antusias dan penuh ide.",
    ISTJ: "Disiplin dan bertanggung jawab.",
    ISFJ: "Setia dan perhatian terhadap orang lain.",
    ESTJ: "Organisator yang kuat dan efisien.",
    ESFJ: "Ramah dan suka bekerja sama.",
    ISTP: "Praktis dan suka memecahkan masalah.",
    ISFP: "Santai dan artistik.",
    ESTP: "Aktif dan suka tantangan.",
    ESFP: "Ceria dan suka bersosialisasi.",
  };

  const careers = {
    INTJ: "Data Scientist, Software Engineer",
    INTP: "Researcher, Programmer",
    ENTJ: "CEO, Project Manager",
    ENTP: "Entrepreneur, Creative Director",
    INFJ: "Psychologist, Counselor",
    INFP: "Writer, Designer",
    ENFJ: "HR Manager, Teacher",
    ENFP: "Content Creator, Public Relations",
    ISTJ: "Accountant, Auditor",
    ISFJ: "Nurse, Administrator",
    ESTJ: "Business Manager, Supervisor",
    ESFJ: "Customer Service, HR Staff",
    ISTP: "Engineer, Mechanic",
    ISFP: "Graphic Designer, Artist",
    ESTP: "Marketing, Sales",
    ESFP: "Event Organizer, Influencer",
  };

  const handleAnswer = () => {

    if (
      currentQuestion <
      questions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

    } else {

      const randomType =
        mbtiTypes[
          Math.floor(
            Math.random() *
            mbtiTypes.length
          )
        ];

      setMbtiResult(randomType);

      setShowResult(true);

    }

  };

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  return (
    <div className="min-h-screen bg-[#F7F7F7]">

      {/* HEADER */}
      <div className="bg-[#F48FB1] px-10 py-6 flex items-center justify-between shadow-md">

        <h1 className="text-3xl font-bold text-white">
          CareerMatch
        </h1>

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="bg-white text-[#F48FB1] px-5 py-2 rounded-xl font-semibold"
        >
          Kembali
        </button>

      </div>

      <div className="flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-3xl bg-white rounded-[32px] p-10 shadow-lg">

          {!showResult ? (

            <>
              {/* STEP */}
              <div className="flex items-center justify-between mb-5">

                <p className="text-gray-500">
                  Pertanyaan {currentQuestion + 1}
                </p>

                <p className="text-[#F48FB1] font-bold">
                  {questions.length} Pertanyaan
                </p>

              </div>

              {/* PROGRESS */}
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-10">

                <div
                  className="bg-[#55B6FF] h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>

              </div>

              {/* QUESTION */}
              <h1 className="text-3xl font-bold text-[#17005B] leading-snug mb-10">

                {questions[currentQuestion]}

              </h1>

              {/* OPTIONS */}
              <div className="flex flex-col gap-4">

                {[
                  "Sangat Setuju",
                  "Setuju",
                  "Tidak Setuju",
                  "Sangat Tidak Setuju",
                ].map((option, index) => (

                  <button
                    key={index}
                    onClick={handleAnswer}
                    className="w-full text-left px-6 py-5 rounded-2xl border-2 border-gray-200 hover:border-[#F48FB1] hover:bg-pink-50 transition font-semibold text-[#17005B]"
                  >

                    {option}

                  </button>

                ))}

              </div>
            </>

          ) : (

            <>
  {/* RESULT */}
  <div className="max-w-2xl mx-auto">

    {/* TITLE */}
    <h1 className="text-3xl font-bold text-center text-[#17005B] mb-8">
      Hasil Kepribadian
    </h1>

    {/* CARD */}
    <div className="bg-white rounded-[28px] p-6 shadow-md">

      {/* PROFILE */}
      <div className="flex items-center gap-4">

        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div>

          <h1 className="text-2xl font-bold text-[#17005B]">
            {mbtiResult}
          </h1>

          <p className="text-base text-gray-500 mt-1">
            {descriptions[mbtiResult]}
          </p>

        </div>

      </div>

      {/* DESC */}
      <p className="text-gray-600 text-base leading-relaxed mt-6">
        Kepribadian kamu menunjukkan cara berpikir,
        bekerja, dan berinteraksi dengan orang lain.
        Kamu memiliki potensi besar dalam bidang
        pekerjaan yang sesuai dengan karaktermu.
      </p>

      {/* DETAIL */}
      <div className="grid grid-cols-2 gap-6 mt-8">

        {/* LEFT */}
        <div>

          <h1 className="text-xl font-bold text-[#17005B] mb-3">
            Detail
          </h1>

          <ul className="text-gray-600 text-base space-y-1">

            <li>• Karakter unik</li>
            <li>• Potensi besar</li>
            <li>• Gaya kerja khas</li>
            <li>• Mudah berkembang</li>

          </ul>

        </div>

        {/* RIGHT */}
        <div className="border-l-2 border-gray-200 pl-4">

          <h1 className="text-xl font-bold text-[#17005B] mb-3">
            Kecocokan
          </h1>

          <div className="text-gray-600 text-base space-y-1">

            <p>Kecocokan: 90%</p>
            <p>Fleksibel</p>
            <p>Kolaboratif</p>
            <p>Potensi Tinggi</p>

          </div>

        </div>

      </div>

      {/* CAREER */}
      <div className="mt-8">

        <h1 className="text-2xl font-bold text-[#17005B] mb-4">
          Rekomendasi Karier
        </h1>

        <div className="bg-[#F8F8F8] rounded-2xl p-4">

          <p className="text-base text-gray-700">
            {careers[mbtiResult]}
          </p>

        </div>

      </div>

      {/* BUTTON */}
      <button
        onClick={() => window.location.reload()}
        className="w-full bg-[#55B6FF] text-white py-4 rounded-[18px] text-xl font-bold mt-8 hover:bg-[#3FA7F5] transition"
      >
        MULAI TES BARU
      </button>

      {/* DOWNLOAD */}
      <button
        onClick={() => {

          const content = `
HASIL MBTI

Kepribadian:
${mbtiResult}

Deskripsi:
${descriptions[mbtiResult]}

Karier Cocok:
${careers[mbtiResult]}
          `;

          const blob = new Blob(
            [content],
            { type: "text/plain" }
          );

          const url =
            window.URL.createObjectURL(blob);

          const a =
            document.createElement("a");

          a.href = url;

          a.download =
            `Hasil-MBTI-${mbtiResult}.txt`;

          a.click();

        }}
        className="w-full mt-4 border-2 border-[#F48FB1] text-[#F48FB1] py-4 rounded-[18px] text-lg font-bold hover:bg-pink-50 transition"
      >
        DOWNLOAD HASIL
      </button>

    </div>

    {/* BUTTON BOTTOM */}
    <button
      onClick={() => navigate("/recommended-jobs")}
      className="w-full bg-[#F48FB1] text-white py-4 rounded-[18px] text-xl font-bold hover:bg-pink-400 transition mt-8"
    >
      REKOMENDASI PEKERJAAN
    </button>

  </div>
</>
          )}

        </div>

      </div>

    </div>
  );
}