import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecommendedJobs() {

  const navigate = useNavigate();

  const jobs = [
    {
      title: "UI/UX Designer",
      company: "Tokopedia",
      category: "Design",
      salary: 12000000,
      type: "Full Time",
      location: "Jakarta",
    },
    {
      title: "Frontend Developer",
      company: "Gojek",
      category: "Programmer",
      salary: 15000000,
      type: "Remote",
      location: "Bandung",
    },
    {
      title: "Graphic Designer",
      company: "Shopee",
      category: "Design",
      salary: 8000000,
      type: "Part Time",
      location: "Malang",
    },
    {
      title: "Data Analyst",
      company: "DANA",
      category: "Finance",
      salary: 13000000,
      type: "Full Time",
      location: "Jakarta",
    },
    {
      title: "Teacher",
      company: "Ruangguru",
      category: "Education",
      salary: 7000000,
      type: "Remote",
      location: "Surabaya",
    },
    {
      title: "Backend Engineer",
      company: "Traveloka",
      category: "Programmer",
      salary: 17000000,
      type: "Full Time",
      location: "Yogyakarta",
    },
    {
      title: "Mobile Developer",
      company: "OVO",
      category: "Programmer",
      salary: 14000000,
      type: "Remote",
      location: "Denpasar",
    },
    {
      title: "HR Staff",
      company: "BCA",
      category: "Finance",
      salary: 9000000,
      type: "Full Time",
      location: "Medan",
    },
  ];

  const locations = [
    "Jakarta",
    "Bandung",
    "Malang",
    "Surabaya",
    "Yogyakarta",
    "Denpasar",
    "Medan",
    "Makassar",
    "Semarang",
    "Balikpapan",
    "Jayapura",
    "Pontianak",
    "Palembang",
    "Batam",
    "Pekanbaru",
  ];

  const [search, setSearch] = useState("");

  const [selectedType, setSelectedType] =
    useState("");

  const [selectedLocation, setSelectedLocation] =
    useState("");

  const [salary, setSalary] =
    useState(25000000);

  // FILTER
  const filteredJobs = jobs.filter((job) => {

    return (

      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&

      (selectedType === "" ||
        job.type === selectedType) &&

      (selectedLocation === "" ||
        job.location === selectedLocation) &&

      job.salary <= salary

    );

  });

  return (
    <div className="min-h-screen bg-[#F7F7F7] px-6 py-8 pb-20">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <button
          onClick={() => navigate(-1)}
          className="text-3xl text-[#17005B]"
        >
          ←
        </button>

        <h1 className="text-3xl font-bold text-[#17005B]">
          Recommended Jobs
        </h1>

        <div></div>

      </div>

      {/* SEARCH */}
      <div className="flex gap-3 mt-8">

        <input
          type="text"
          placeholder="Cari pekerjaan..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 outline-none"
        />

      </div>

      {/* TOP RECOMMENDATION */}
      <div className="mt-10">

        <h1 className="text-2xl font-bold text-[#17005B] mb-5">
          Rekomendasi Untuk Kamu
        </h1>

        <div className="bg-[#F48FB1] rounded-[28px] p-7 text-white shadow-md">

          <p className="text-sm opacity-80">
            Berdasarkan hasil MBTI kamu
          </p>

          <h1 className="text-4xl font-bold mt-2">
            UI/UX Designer
          </h1>

          <p className="mt-4 text-lg">
            Cocok untuk kepribadian kreatif,
            intuitif, dan suka eksplor ide baru.
          </p>

          <button className="mt-6 bg-white text-[#F48FB1] px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
            Lihat Detail
          </button>

        </div>

      </div>

      {/* FILTER */}
      <div className="bg-white rounded-[28px] p-6 mt-8 shadow-md">

        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold text-[#17005B]">
            Filter
          </h1>

          <button
            onClick={() => {
              setSelectedType("");
              setSelectedLocation("");
              setSalary(25000000);
            }}
            className="text-sm text-[#F48FB1] font-semibold"
          >
            Reset
          </button>

        </div>

        {/* LOCATION */}
        <div className="mt-6">

          <p className="font-semibold mb-2 text-[#17005B]">
            Lokasi
          </p>

          <select
            value={selectedLocation}
            onChange={(e) =>
              setSelectedLocation(
                e.target.value
              )
            }
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none"
          >

            <option value="">
              Semua Lokasi
            </option>

            {locations.map((location, index) => (

              <option
                key={index}
                value={location}
              >
                {location}
              </option>

            ))}

          </select>

        </div>

        {/* JOB TYPE */}
        <div className="mt-6">

          <p className="font-semibold mb-3 text-[#17005B]">
            Tipe Pekerjaan
          </p>

          <div className="flex gap-3 flex-wrap">

            {[
              "Full Time",
              "Part Time",
              "Remote",
            ].map((type) => (

              <button
                key={type}
                onClick={() =>
                  setSelectedType(type)
                }
                className={`px-5 py-3 rounded-xl border transition ${
                  selectedType === type
                    ? "bg-[#F48FB1] text-white border-[#F48FB1]"
                    : "bg-[#FFF7F9]"
                }`}
              >

                {type}

              </button>

            ))}

          </div>

        </div>

        {/* SALARY */}
        <div className="mt-8">

          <p className="font-semibold mb-3 text-[#17005B]">
            Maksimal Gaji
          </p>

          <input
            type="range"
            min="5000000"
            max="25000000"
            step="1000000"
            value={salary}
            onChange={(e) =>
              setSalary(e.target.value)
            }
            className="w-full accent-pink-400"
          />

          <p className="mt-2 text-[#17005B] font-bold">
            Rp {Number(salary).toLocaleString("id-ID")}
          </p>

        </div>

      </div>

      {/* JOB LIST */}
      <div className="mt-10">

        <div className="flex items-center justify-between mb-5">

          <h1 className="text-2xl font-bold text-[#17005B]">
            Job List
          </h1>

          <p className="text-gray-500 text-sm">
            {filteredJobs.length} pekerjaan
          </p>

        </div>

        <div className="flex flex-col gap-5">

          {filteredJobs.map((job, index) => (

            <div
              key={index}
              className="bg-white rounded-[24px] p-5 shadow-sm hover:shadow-lg transition"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h1 className="text-2xl font-bold text-[#17005B]">
                    {job.title}
                  </h1>

                  <p className="text-gray-500 mt-1">
                    {job.company}
                  </p>

                </div>

                <button className="text-2xl">
                  ☆
                </button>

              </div>

              <p className="mt-4 text-[#F48FB1] font-bold text-lg">
                Rp {job.salary.toLocaleString("id-ID")}
              </p>

              <div className="flex gap-3 mt-5 flex-wrap">

                <div className="bg-[#F5F5F5] px-4 py-2 rounded-xl text-sm">
                  {job.type}
                </div>

                <div className="bg-[#F5F5F5] px-4 py-2 rounded-xl text-sm">
                  {job.location}
                </div>

                <div className="bg-[#F5F5F5] px-4 py-2 rounded-xl text-sm">
                  {job.category}
                </div>

              </div>

              <button className="mt-5 w-full bg-[#55B6FF] text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                Apply Now
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}