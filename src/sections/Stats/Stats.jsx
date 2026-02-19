import React from "react";

const Stats = () => {
  const statsData = [
    { number: "10,200+", label: "Total Enrollment" },
    {
      number: "1970",
      label: "Year of Establishment Mahatma Education Society",
    },
    { number: "10+", label: "Ph.D. Programs" },
    { number: "100%", label: "Internship" },
    { number: "95%", label: "Placement" },
    { number: "9,000+", label: "Undergraduates" },
    { number: "20+", label: "Undergraduate Programs" },
    { number: "1,150", label: "Postgraduates" },
    { number: "15+", label: "Postgraduate Programs" },
    { number: "25%", label: "Students receiving Scholarships" },
    { number: "1,20,000+", label: "Alumni around the World" },
    { number: "300+", label: "Faculty" },
  ];

  return (
    <section className="container mx-auto pb-16 px-4">
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl lg:text-5xl text-red-800 font-bold text-center">
          <span className="text-orange-400 font-normal">Legacy </span>
            of Excellence
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {statsData.map((item, index) => (
          <div key={index} className="text-center">
            <h4 className="text-3xl lg:text-4xl text-red-800 font-extrabold">
              {item.number}
            </h4>

            <div className="border-b-2 border-gray-800 my-3 w-10 mx-auto"></div>

            <p className="text-sm text-gray-700 leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
