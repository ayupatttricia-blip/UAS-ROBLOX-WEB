import React from "react";
import { useNavigate } from "react-router-dom";

const personalities = [
  {
    type: "INTJ",
    name: "The Architect",
    desc: "Pribadi strategis, logis, dan suka merancang masa depan.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    type: "INTP",
    name: "The Thinker",
    desc: "Suka menganalisis, kreatif, dan penuh rasa ingin tahu.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
  },
  {
    type: "ENTJ",
    name: "The Commander",
    desc: "Pemimpin alami yang percaya diri dan tegas.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  },
  {
    type: "ENTP",
    name: "The Debater",
    desc: "Pintar berargumen dan suka mencoba ide baru.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    type: "INFJ",
    name: "The Advocate",
    desc: "Penuh empati, idealis, dan suka membantu orang.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    type: "INFP",
    name: "The Mediator",
    desc: "Pribadi tenang, kreatif, dan sangat peduli.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140049.png",
  },
  {
    type: "ENFJ",
    name: "The Protagonist",
    desc: "Inspiratif, ramah, dan suka memotivasi orang lain.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
  },
  {
    type: "ENFP",
    name: "The Campaigner",
    desc: "Aktif, antusias, dan penuh semangat.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140050.png",
  },
  {
    type: "ISTJ",
    name: "The Logistician",
    desc: "Disiplin, bertanggung jawab, dan terorganisir.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140060.png",
  },
  {
    type: "ISFJ",
    name: "The Defender",
    desc: "Setia, perhatian, dan suka menjaga orang lain.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140041.png",
  },
  {
    type: "ESTJ",
    name: "The Executive",
    desc: "Tegas, pekerja keras, dan suka memimpin.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140054.png",
  },
  {
    type: "ESFJ",
    name: "The Consul",
    desc: "Ramah, sosial, dan suka membantu sekitar.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140055.png",
  },
  {
    type: "ISTP",
    name: "The Virtuoso",
    desc: "Praktis, fleksibel, dan suka eksplorasi.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140039.png",
  },
  {
    type: "ISFP",
    name: "The Adventurer",
    desc: "Santai, artistik, dan suka kebebasan.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
  },
  {
    type: "ESTP",
    name: "The Entrepreneur",
    desc: "Berani mengambil risiko dan penuh energi.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140045.png",
  },
  {
    type: "ESFP",
    name: "The Entertainer",
    desc: "Ceria, spontan, dan suka menjadi pusat perhatian.",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140043.png",
  },
];

export default function MbtiIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6F6F6] pb-32">

      {/* HEADER */}
      <div className="bg-[#F48FB1] rounded-b-[28px] px-8 py-5 shadow-md">

        <h1 className="text-3xl font-bold text-white text-center">
          Tes MBTI CareerMatch
        </h1>

      </div>

      {/* TITLE */}
      <div className="px-6 mt-8">

        <h1 className="text-3xl font-bold text-[#17005B]">
          16 Tipe Kepribadian
        </h1>

        <p className="text-gray-500 mt-2 text-base">
          Kenali kepribadianmu dan temukan karier yang cocok untukmu.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-5 px-6 mt-8">

        {personalities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] p-5 shadow-sm text-center hover:shadow-lg transition"
          >

            <img
              src={item.image}
              alt={item.type}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />

            <h1 className="text-2xl font-bold text-[#17005B] mt-4">
              {item.type}
            </h1>

            <p className="text-[#9A8FB0] text-lg mt-1">
              {item.name}
            </p>

            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              {item.desc}
            </p>

            <button className="mt-5 border border-[#8B5CF6] text-[#17005B] px-6 py-2 rounded-full hover:bg-[#F3EEFF] transition">
              Lihat
            </button>

          </div>
        ))}

      </div>

      {/* DESCRIPTION */}
      <div className="px-6 mt-10">

        <div className="bg-white rounded-[24px] p-6 shadow-sm">

          <h1 className="text-2xl font-bold text-[#17005B]">
            Tentang Tes MBTI
          </h1>

          <p className="text-gray-600 leading-relaxed mt-4 text-base">
            MBTI adalah tes kepribadian yang membantu memahami cara berpikir,
            bekerja, dan berinteraksi dengan orang lain. 
            Dengan mengetahui tipe kepribadianmu, kamu bisa menemukan karier
            yang paling sesuai dengan minat dan potensimu.
          </p>

        </div>

      </div>

      {/* BUTTON */}
      <div className="px-6 mt-10">

        <button
          onClick={() => navigate("/mbti")}
          className="w-full bg-[#F48FB1] text-white py-4 rounded-[20px] text-2xl font-bold hover:bg-pink-400 transition"
        >
          TEST NOW
        </button>

      </div>

    </div>
  );
}