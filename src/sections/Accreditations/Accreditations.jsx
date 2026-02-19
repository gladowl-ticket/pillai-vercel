import React from "react";
import Img1 from "../../assets/accreditation/1.png";
import Img2 from "../../assets/accreditation/2.png";
import Img3 from "../../assets/accreditation/3.png";
import Img4 from "../../assets/accreditation/4.png";
import Img5 from "../../assets/accreditation/5.png";

const Accreditations = () => {
  return (
    <section className="py-12 bg_v_light_red">
      <div className="container">
        <div className="flex justify-center mb-6">
          <h2 className="text-5xl text-red-800 font-bold text-center">
            Accreditations & Accolades
          </h2>
        </div>

        <div className="flex justify-center accreditations">
          <div className="flex flex-wrap justify-center w-full md:w-10/12 gap-y-6">
            <div className="w-1/2 md:w-1/5 flex justify-center">
              <img src={Img1} alt="" />
            </div>

            <div className="w-1/2 md:w-1/5 flex justify-center">
              <img src={Img2} alt="" />
            </div>

            {/* <div className="w-1/2 md:w-1/5 flex justify-center">
              <img src={Img3} alt="" />
            </div> */}

            <div className="w-1/2 md:w-1/5 flex justify-center">
              <img src={Img4} alt="" />
            </div>

            <div className="w-1/2 md:w-1/5 flex justify-center">
              <img src={Img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
