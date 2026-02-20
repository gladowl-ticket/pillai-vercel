import { useState } from "react";
import Img1 from "../../assets/events/1.png";
import Img2 from "../../assets/events/2.png";
import Img3 from "../../assets/events/3.png";
import Img4 from "../../assets/events/4.png";
import Img5 from "../../assets/events/5.png";
import Img6 from "../../assets/events/6.png";
import Img7 from "../../assets/events/7.png";

const events = [
{ title: "Dandiya Night", desc: "Celebrate rhythm, tradition, and vibrant festive energy together.", img: Img1 },
{ title: "Algeria Cultural Fest", desc: "Experience Algerian culture, music, cuisine, and heritage celebrations.", img:Img2 },
{ title: "Garba Celebration", desc: "Join colorful dances honoring tradition, unity, and festive spirit.", img: Img3 },
{ title: "Algeria DJ Night", desc: "Dance to electrifying beats blending Algerian and global sounds.", img: Img4 },
{ title: "Republic Day Celebration", desc: "Honoring freedom, unity, and pride on 26th January celebrations.", img: Img5 },
{ title: "Classical Bharatanatyam", desc: "Experience timeless grace through expressive movements and sacred storytelling.", img: Img6 },
{ title: "Christmas Celebration", desc: "Celebrate joy, warmth, and togetherness in festive holiday spirit.", img: Img7 },
];

export default function Events() {
const [active, setActive] = useState(0);

return (
<section className="pb-10" id="events">
    <div className="container text-center">
        <h2 className="text-4xl md:text-5xl text-red-800 font-bold mb-8">
            <span className="text-orange-400 font-normal">Life at </span> Pillai University
        </h2>
    </div>

    {/* Tabs */}
    <div className="container">
        <div className="flex flex-col md:flex-row gap-3 md:h-[520px]">
            {events.map((event, i) => {
            const isActive = active === i;

            return (
            <div key={i} onClick={()=> setActive(i)}
                className={`
                flex cursor-pointer border border-gray-300 rounded-xl overflow-hidden
                transition-all duration-500 ease-in-out
                flex-col md:flex-row
                ${isActive ? "md:w-full bg-orange-300" : "md:w-20 bg-orange-100 hover:bg-orange-300"}
                `}
                >
                {/* LABEL */}
                <div className={`relative flex md:flex-col items-center md:items-start justify-between 
                    w-full md:w-[60px] p-4 ${ isActive ? "hidden" : "block" }`}>
                    <span className="text-2xl md:text-3xl absolute right-4 md:static">+</span>

                    {/* vertical text only on desktop */}
                    <span className="font-medium text-black hidden md:block writing-vertical-rl rotate-180">
  {event.title}
</span>


                    {/* horizontal text on mobile */}
                    <span className="font-medium text-black md:hidden">
                        {event.title}
                    </span>
                </div>


                {/* PANEL */}
                <div className={` relative flex-1 transition-all duration-500 ${isActive ? "block" : "hidden md:block" }
                    `}>
                    <img src={event.img} alt={event.title} className="w-full h-55 md:h-full object-cover" />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-200">
                        {event.title}
                        </h2>
                        <div className="w-16 h-0.5 bg-white my-3"></div>
                        <p className="text-white text-sm md:text-base">
                        {event.desc}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            );
            })}
        </div>
    </div>
</section>
);
}