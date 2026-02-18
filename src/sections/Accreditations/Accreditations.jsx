import React from "react";
import Img1 from "../../assets/accreditation/1.png";
import Img2 from "../../assets/accreditation/2.png";
import Img3 from "../../assets/accreditation/3.png";
import Img4 from "../../assets/accreditation/4.png";
import Img5 from "../../assets/accreditation/5.png";

const Accreditations = () => {
  return (
    <section className="container py-12 bg_v_light_red">
      <div className="flex flex-wrap mb-6 justify-center">
        <h2 className="text-5xl text-red-800 font-bold">
          Accreditations & Accolades
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-between w-full md:w-8/12 accreditations">
          <div className="w-30">
            <img src={Img1} alt="" className="" />
          </div>
          <div className="w-30">
            <img src={Img2} alt="" className="" />
          </div>
          <div className="w-30">
            <img src={Img3} alt="" className="" />
          </div>
          <div className="w-30">
            <img src={Img4} alt="" className="" />
          </div>
          <div className="w-30">
            <img src={Img5} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
