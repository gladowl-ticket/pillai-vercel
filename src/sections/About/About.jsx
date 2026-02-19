import React from 'react';

const About = () =>{
return(
<section className='py-12 container' id="aboutus">
    <div className="flex justify-center mb-6">
        <h2 className='text-5xl text-red-800 font-bold'>About Pillai University</h2>
    </div>
    <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 md:pe-8 relative">
            <video autoPlay loop muted playsInline preload="auto" className="w-full rounded-xl border">
                <source src="https://d3s04l0089mebw.cloudfront.net/static/website/videos/vertical_small.mp4"
                    media="(max-width: 767px)" type="video/mp4" />
                <source src="https://d3s04l0089mebw.cloudfront.net/static/website/videos/Landscape.webm"
                    media="(min-width: 768px)" type="video/webm" />
                <source src="https://d3s04l0089mebw.cloudfront.net/static/website/videos/Landscape.webm"
                    type="video/webm" />
            </video>
            <div className="absolute bg-red-800 rounded-xl p-4 -bottom-20 md:-bottom-4 right-2">
                <h4 className='text-white text-sm text-center'>
                    <span className='text-4xl font-bold'>50+</span> <br /> Years of Excellence <br />
(Mahatma Education Society)</h4>
            </div>
        </div>
        <div className="w-full md:w-6/12 ps-4 mt-24 md:mt-0">
            <h4 className='text-2xl mb-4'>Shaping The Future With 50+ Years Of Educational Excellence</h4>
            <p className='text-justify'>Backed by over <span className="font-bold">five decades </span>
                 of proven commitment to transformative education, <span className="font-bold">Mahatma Education Society </span>
                has spawned and nurtured generations of leaders, innovators, and scholars through its 48 institutions.
                Building on this rich heritage of <span className="font-bold">academic excellence </span>, we are proud to carry forward this legacy through
                Pillai University, a State recognized Private University that unites the best of traditional practices
                and innovation under one roof.</p>
                <br />
            <p className='text-sm text-justify'>At Pillai University, we are committed to deliver multidisciplinary education designed to meet the ever
                changing needs of industry and academia. Our world-class infrastructure, seasoned faculty, and
                forward-thinking curriculum empower students to become leaders, entrepreneurs, innovators, and
                change-makers.</p>
        </div>
    </div>
</section>
);
}

export default About;