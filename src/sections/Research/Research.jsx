import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Img1 from '../../assets/research/1.jpg';
import Img2 from '../../assets/research/2.jpg';
import Img3 from '../../assets/research/3.jpg';
import Img4 from '../../assets/research/4.jpg';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Research = () => {
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

  return (

<section className="container py-12" id="research">
    <div className="flex flex-wrap justify-center mb-6 flex-col">
        <h2 className='text-5xl text-red-800 font-bold mb-2 text-center'>Research & Innovation</h2>
        <p className='text-base text-center'>Advancing Knowledge, Shaping Tomorrow.</p>
    </div>
    <div className="flex flex-wrap justify-center">
        <div className="w-1/2 md:w-1/5 p-4">
            <h4 className="text-3xl text-red-800 font-extrabold">10 Crore+</h4>
            <div className="border-b-2 border-gray-800 my-2 w-10"></div>
            <p className="text-sm">Consultancy & Research Grants</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4">
            <h4 className="text-3xl text-red-800 font-extrabold">50+</h4>
            <div className="border-b-2 border-gray-800 my-2 w-10"></div>
            <p className="text-sm">Industry Partnerships</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4">
            <h4 className="text-3xl text-red-800 font-extrabold">100+</h4>
            <div className="border-b-2 border-gray-800 my-2 w-10"></div>
            <p className="text-sm">Startups</p>
        </div>
        <div className="w-1/2 md:w-1/5 p-4">
            <h4 className="text-3xl text-red-800 font-extrabold">50+</h4>
            <div className="border-b-2 border-gray-800 my-2 w-10"></div>
            <p className="text-sm">Patents</p>
        </div>
    </div>
      {/* Carousel */}
      <div className="py-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-2"
              >
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={src}
                    alt={`slide-${index}`}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="p-2 bg-orange-400 rounded-full cursor-pointer"
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 bg-orange-400 rounded-full cursor-pointer"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
</section>
);
}

export default Research;