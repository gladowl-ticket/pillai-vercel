import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Img1 from '../../assets/placement/1.png';
import Img2 from '../../assets/placement/2.png';
import Img3 from '../../assets/placement/3.png';
import Img4 from '../../assets/placement/4.png';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Placement = () =>{

const head = ["300+", "5000+", "10 LPA","95 %"];
const desc = ["Companies", "Job Offers", "Average Package", "Placements"];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const images = [
    Img1,
    Img2,
    Img3,
    Img4
  ];


return(
<section className="container py-12" id="placement">
    <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pe-4">
        {/* Carousel */}
            <div className="">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((src, index) => (
                        <div key={index} className="min-w-full lg:min-w-1/2 px-2">
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <img src={src} alt={`slide-${index}`} className="w-full object-contain" />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={scrollPrev} className="p-2 bg-orange-400 rounded-full cursor-pointer">
                        <BsArrowLeft />
                    </button>
                    <button onClick={scrollNext} className="p-2 bg-orange-400 rounded-full cursor-pointer">
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 md:ps-4">
            <p className='text-base mb-4'>Placements Highlights</p>
            <h2 className='text-5xl text-red-800 font-bold mb-4'>Top Global Companies <br /> Recruit Our Talent</h2>
            <p className="text-justify">Our university is recognized for its exceptional placement record, with top recruiters and leading
                companies visiting our campus every year for student recruitment.</p>
            <br />
            <p className='mb-12 text-justify'>We provide 100% placement assistance, industry-relevant training, and hands-on
                internship opportunities
                to ensure our students are job-ready from day one. Graduates from our programs have secured high-paying
                positions in multinational companies (MNCs), emerging startups, and prestigious government sectors</p>
            <div className="flex flex-wrap">
                {head.map((item, index) => (
                <div key={index} className="w-1/2 md:w-1/4 px-1 mb-4">
                    <div className="border border-gray-300 bg-gray-200 py-3 px-1 rounded-xl text-center">
                        <h4 className="text-3xl text-black texte-center font-extrabold mb-2">{item}</h4>
                        <p className="text-sm">{desc[index]}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
</section>
);
}

export default Placement;