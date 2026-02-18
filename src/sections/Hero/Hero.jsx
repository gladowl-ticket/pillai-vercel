import { Carousel } from "flowbite-react";
import Hero_1 from "../../assets/hero/1.png";
import Hero_2 from "../../assets/hero/2.png";
import Hero_3 from "../../assets/hero/3.png";
import Hero_4 from "../../assets/hero/4.png";
import './Hero.css';

import HeroM_1 from "../../assets/hero/01.png";
import HeroM_2 from "../../assets/hero/02.png";
import HeroM_3 from "../../assets/hero/03.png";
import HeroM_4 from "../../assets/hero/04.png";

const Hero = () => {
  return (
    <div
      className="hero_section"
    >
      <Carousel
        slide
        interval={1500}
        indicators={true}
        className=""
        theme={{
          indicators: {
            active: {
              off: 'bg-white/50 hover:bg-white',
              on: 'bg-red-800',
            },
            base: 'h-3 w-3 rounded-full border border-red-800',
            wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
          },
        }}
      >
        {/* Slide 1 */}
        <div className="relative flex h-full items-center justify-center">
          <img className="hidden md:block w-full h-full object-contain" src={Hero_1} alt="" />
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_1} alt="" />
        </div>

        {/* Slide 2 */}
        <div className="relative flex h-full items-center justify-center">
          <img className="hidden md:block w-full h-full object-contain" src={Hero_2} alt="" />
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_2} alt="" />
        </div>

        {/* Slide 3 */}
        <div className="relative flex h-full items-center justify-center">
          <img className="hidden md:block w-full h-full object-contain" src={Hero_3} alt="" />
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_3} alt="" />
        </div>

        {/* Slide 4 */}
        <div className="relative flex h-full items-center justify-center">
          <img className="hidden md:block w-full h-full object-contain" src={Hero_4} alt="" />
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
