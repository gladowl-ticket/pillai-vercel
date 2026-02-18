import { Carousel } from "flowbite-react";
import Hero_1 from "../../assets/hero/1.png";
import Hero_2 from "../../assets/hero/2.png";
import Hero_3 from "../../assets/hero/3.png";
import Hero_4 from "../../assets/hero/4.png";

import HeroM_1 from "../../assets/hero/01.png";
import HeroM_2 from "../../assets/hero/02.png";
import HeroM_3 from "../../assets/hero/03.png";
import HeroM_4 from "../../assets/hero/04.png";

const Hero = () => {
  return (
    <div className="">
      <Carousel slide interval={1500}>
        {/* Slide 1 */}
        <div className="relative flex h-full items-center justify-center">
          {/* Desktop */}
          <img className="hidden md:block w-full h-full object-contain" src={Hero_1} alt="" />
          {/* Mobile */}
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_1} alt="" />
        </div>

        {/* Slide 2 */}
        <div className="relative flex h-full items-center justify-center">
          <img className="hidden md:block w-full h-full object-contain" src={Hero_2} alt="" />
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_2} alt="" />
        </div>
        {/* Slide 1 */}
        <div className="relative flex h-full items-center justify-center">
          {/* Desktop */}
          <img className="hidden md:block w-full h-full object-contain" src={Hero_3} alt="" />
          {/* Mobile */}
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_3} alt="" />
        </div>

        {/* Slide 2 */}
        <div className="relative flex h-full items-center justify-center">
          <img className="hidden md:block w-full h-full object-contain" src={Hero_4} alt="" />
          <img className="block md:hidden w-full h-full object-contain" src={HeroM_4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
