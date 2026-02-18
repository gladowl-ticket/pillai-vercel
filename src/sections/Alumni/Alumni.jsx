import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import './Alumni.css';
import { useModal } from '../../sections/FormModal/ModalContext';

import Img1 from "../../assets/alumni/1.png";
import Img2 from "../../assets/alumni/2.png";
import Img3 from "../../assets/alumni/3.png";
import Img4 from "../../assets/alumni/4.png";
import Img5 from "../../assets/alumni/5.png";
import Img6 from "../../assets/alumni/6.png";
import Img7 from "../../assets/alumni/7.png";
import Img8 from "../../assets/alumni/8.png";
import Img9 from "../../assets/alumni/9.png";

import small1 from "../../assets/alumni/small/1.png";
import small2 from "../../assets/alumni/small/2.png";
import small3 from "../../assets/alumni/small/3.png";
import small4 from "../../assets/alumni/small/4.png";
import small5 from "../../assets/alumni/small/5.png";
import small6 from "../../assets/alumni/small/6.png";
import small7 from "../../assets/alumni/small/7.png";
import small8 from "../../assets/alumni/small/8.png";
import small9 from "../../assets/alumni/small/9.png";

const Alumni = () => {
const { openModal } = useModal();
const [selectedIndex, setSelectedIndex] = useState(0);

const [emblaRef, emblaApi] = useEmblaCarousel({
loop: true,
align: "start",
});
const [thumbRef, thumbApi] = useEmblaCarousel({
dragFree: true,
containScroll: "keepSnaps",
});

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];
const thumbnail = [small1, small2, small3, small4, small5, small6, small7, small8, small9];

const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

const scrollTo = useCallback(
(index) => {
emblaApi?.scrollTo(index);
thumbApi?.scrollTo(index);
},
[emblaApi, thumbApi]
);
const onSelect = useCallback(() => {
if (!emblaApi) return;
const index = emblaApi.selectedScrollSnap();
setSelectedIndex(index);
thumbApi?.scrollTo(index);
}, [emblaApi, thumbApi]);

// Sync selected slide
if (emblaApi) emblaApi.on("select", onSelect);

return (
<section className="alumni_sec py-12 bg_gradient text-white" id="alumni">
    <div className="container mx-auto">
        <div className="flex flex-wrap relative">
            {/* LEFT CONTENT */}
            <div className="w-full md:w-5/12 mb-6 md:mb-0 md:pe-4">
                <p className="uppercase mb-1 text-white">Alumni</p>

                <h2 className="text-3xl lg:text-5xl font-bold ">
                    <span className="font-normal">
                        Explore inspiring journeys of
                    </span>{" "}
                    graduates excelling in engineering, management, technology, and more.
                </h2>

                {/* Desktop Thumbnails */}
                <div className="hidden lg:block mt-6">
                    <div className="overflow-hidden" ref={thumbRef}>
                        <div className="flex ">
                            {thumbnail.map((src, i) => (
                            <div key={i} className="min-w-1/5 px-2">
                                <img src={src} onClick={()=> scrollTo(i)}
                                className={`h-28 w-full object-cover rounded-lg cursor-pointer border-4 transition ${
                                selectedIndex === i
                                ? "border-white"
                                : "border-transparent"
                                }`}
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>



                <button  onClick={openModal}
                    className="mt-6 border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
                    Apply Now
                </button>
            </div>

            {/* RIGHT CAROUSEL */}
            <div className="w-full md:w-7/12 md:ps-4">
                {/* Main Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((src, index) => (
                        <div key={index} className="min-w-full md:min-w-1/2 px-2">
                            <img src={src} alt={`alumni-${index}`} className="rounded-2xl border w-full" />
                        </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-4 mt-6 absolute md:left-1/4 left-1/3 md:bottom-0 -bottom-10">
                    <button onClick={scrollPrev} className="p-2 bg-orange-400 rounded-full">
                        <BsArrowLeft />
                    </button>
                    <button onClick={scrollNext} className="p-2 bg-orange-400 rounded-full">
                        <BsArrowRight />
                    </button>
                </div>

                {/* Mobile Thumbnails */}
                <div className="flex lg:hidden gap-3 mt-6 overflow-x-auto">
                    {thumbnail.map((src, i) => (
                    <img key={i} src={src} onClick={()=> scrollTo(i)}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedIndex === i ? "border-yellow-400" : "border-transparent"
                    }`}
                    />
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default Alumni;