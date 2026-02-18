import { useState } from "react";

import img1 from "../../assets/events/1.png";
import img2 from "../../assets/events/2.png";
import img3 from "../../assets/events/3.png";
import img4 from "../../assets/events/4.png";
import img5 from "../../assets/events/5.png";
import img6 from "../../assets/events/6.png";

const tabsData = [
  {
    id: 1,
    title: "Algeria Cultural Fest",
    image: img1,
    heading: "Dandiya Night",
    description:
      "Celebrate rhythm, tradition, and vibrant festive energy together.",
  },
  {
    id: 2,
    title: "Garba Celebration",
    image: img2,
    heading: "Garba Celebration",
    description:
      "Experience colorful traditional dance and joyful celebrations.",
  },
  {
    id: 3,
    title: "Algeria DJ Night",
    image: img3,
    heading: "DJ Night",
    description: "Dance to electrifying beats and unforgettable music vibes.",
  },
  {
    id: 4,
    title: "Republic Day Celebration",
    image: img4,
    heading: "Republic Day",
    description: "Celebrate pride, unity, and cultural diversity together.",
  },
  {
    id: 5,
    title: "Classical Bharatanatyam",
    image: img5,
    heading: "Bharatanatyam",
    description: "Witness graceful classical dance and artistic expressions.",
  },
  {
    id: 6,
    title: "Christmas Celebration",
    image: img6,
    heading: "Christmas Fest",
    description: "Spread joy, lights, and festive cheer this Christmas.",
  },
];

export default function Immerse() {
  const [activeTab, setActiveTab] = useState(1);

  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-gray-100 py-16 overflow-hidden" id="events">
      <div className="container  px-4">
        <div className="flex justify-center text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-800">
            <span className="font-normal ">Life at </span> Pillai University
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT IMAGE PANEL */}
          <div className="relative w-full lg:w-4/5 h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              key={activeContent.image}
              src={activeContent.image}
              alt={activeContent.heading}
              className="w-full h-full object-cover transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-12 text-white">
              <h2 className="text-4xl font-bold mb-4 border-b-2 border-orange inline-block pb-2">
                {activeContent.heading}
              </h2>
              <p className="text-lg text-white max-w-xl">
                {activeContent.description}
              </p>
            </div>
          </div>

          {/* RIGHT EXPANDABLE VERTICAL TABS */}
          <div className="flex h-[500px] gap-3 d-none">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative cursor-pointer 
                  flex flex-col items-center justify-between
                  rounded-xl transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "w-28 bg-orange text-white shadow-xl"
                      : "w-16 bg-[#e7cfb0] text-black hover:bg-orange hover:text-white"
                  }`}
                >
                  {/* PLUS ICON */}
                  <div className="pt-4 text-xl font-bold">
                    {isActive ? "-" : "+"}
                  </div>

                  {/* ROTATED TEXT */}
                  <div className="flex-1 flex items-center justify-center">
                    <span className="rotate-[-90deg] whitespace-nowrap text-sm font-medium tracking-wide">
                      {tab.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RESPONSIVE TABS */}
          <div
            className=" md:hidden
          flex flex-col 
          lg:flex-row-reverse
          gap-3
          h-auto lg:h-[500px]
        "
          >
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
          cursor-pointer
          transition-all duration-500 ease-in-out
          rounded-xl

          /* MOBILE STYLE */
          w-full py-4 px-6 text-center

          ${
            isActive
              ? "bg-orange text-white shadow-lg"
              : "bg-[#e7cfb0] text-black hover:bg-orange hover:text-white"
          }

          /* DESKTOP STYLE */
          lg:w-auto lg:h-full
          lg:flex lg:flex-col lg:justify-between lg:items-center
          ${isActive ? "lg:w-28" : "lg:w-16"}
          `}
                >
                  {/* DESKTOP PLUS ICON */}
                  <div className="hidden lg:block pt-4 text-xl font-bold">
                    {isActive ? "-" : "+"}
                  </div>

                  {/* TEXT */}
                  <div className="flex items-center justify-center">
                    <span className="text-sm font-medium tracking-wide lg:rotate-[-90deg] whitespace-nowrap">
                      {tab.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
