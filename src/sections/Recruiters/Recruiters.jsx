import React from 'react';
import img1 from '../../assets/recruiters/1.png'
import img2 from '../../assets/recruiters/2.png'
import img3 from '../../assets/recruiters/3.png'
import img4 from '../../assets/recruiters/4.png'
import img5 from '../../assets/recruiters/5.png'
import img6 from '../../assets/recruiters/6.png'
import img7 from '../../assets/recruiters/7.png'
import img8 from '../../assets/recruiters/8.png'
import img9 from '../../assets/recruiters/9.png'
import img10 from '../../assets/recruiters/10.png'
import img11 from '../../assets/recruiters/11.png'
import img12 from '../../assets/recruiters/12.png'
import img13 from '../../assets/recruiters/13.png'
import img14 from '../../assets/recruiters/14.png'
import img15 from '../../assets/recruiters/15.png'
import img16 from '../../assets/recruiters/16.png'
import img17 from '../../assets/recruiters/17.png'
import img18 from '../../assets/recruiters/18.png'

const Recruiters = () =>{
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18 ];
    return(
        <section className="container pb-12">
            <div className="flex justify-center">
                <h2 className='text-5xl text-red-800 font-bold mb-8'><span className='text-orange-400 font-normal'>Top </span> Recruiters</h2>
            </div>
            <div className="flex flex-wrap">
                {
                    images.map((item, index)=>{
                        return(
                            <div key={index}  className="w-1/2 md:w-2/12 px-2 mb-4">
                                <div className="border border-gray-300 bg-gray-100 py-3 px-2 rounded-xl flex justify-center">
                                    <img src={item} alt="" className='h-16' />
                                </div>
                            </div>
                        )
                        
                    })
                }
                
                
            </div>
        </section>
    );
}

export default Recruiters;