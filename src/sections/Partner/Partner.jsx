import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/partners/1.png";
import img2 from "../../assets/partners/2.png";
import img3 from "../../assets/partners/3.png";
import img4 from "../../assets/partners/4.png";
import img5 from "../../assets/partners/5.png";
import img6 from "../../assets/partners/6.png";
import img7 from "../../assets/partners/7.png";
import img8 from "../../assets/partners/8.png";
import img9 from "../../assets/partners/9.png";


const Partner = () =>{
    const partners = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    return(
        <section className='bg-red-800 py-14 px-4 md:px-0'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/12">
                </div>
                <div className="w-full lg:w-3/12 pb-10 md:pb-0">
                    <h2 className="text-5xl text-white font-bold">Knowledge Partner</h2>
                </div>
                <div className="w-full lg:w-8/12 bg-white rounded-bl-xl rounded-tl-xl px-6 py-6">
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 1500 }} loop
                    >
                        {
                            partners.map((img, id) => (
                                <SwiperSlide key={id} className='border-r border-gray-400'><img src={img} alt="" className='pe-3' /></SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </div>

            </div>
        </section>
    );
}

export default Partner;