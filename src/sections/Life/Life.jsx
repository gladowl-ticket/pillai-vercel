import { useState, useRef } from "react";

import useEmblaCarousel from "embla-carousel-react";

// thumbnails
import Img1 from "../../assets/life/1.png";
import Img2 from "../../assets/life/2.png";
import Img3 from "../../assets/life/3.png";
import Img4 from "../../assets/life/4.png";
import Img5 from "../../assets/life/5.png";
import Img6 from "../../assets/life/6.png";
import Img7 from "../../assets/life/7.png";
import Img8 from "../../assets/life/8.png";

// videos
import Video1 from "../../assets/life/1.mp4";
import Video2 from "../../assets/life/2.mp4";
import Video3 from "../../assets/life/3.mp4";
import Video4 from "../../assets/life/4.mp4";
import Video5 from "../../assets/life/5.mp4";
import Video6 from "../../assets/life/6.mp4";
import Video7 from "../../assets/life/7.mp4";
import Video8 from "../../assets/life/8.mp4";

const gallery = [
  { type: "video", thumbnail: Img1, video: Video1 },
  { type: "video", thumbnail: Img2, video: Video2 },
  { type: "video", thumbnail: Img3, video: Video3 },
  { type: "video", thumbnail: Img4, video: Video4 },
  { type: "video", thumbnail: Img5, video: Video5 },
  { type: "video", thumbnail: Img6, video: Video6 },
  { type: "video", thumbnail: Img7, video: Video7 },
  { type: "video", thumbnail: Img8, video: Video8 },
];

const Life = () => {
  const videoRefs = useRef([]);
  const handlePlay = (index) => {
    // pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    setPlayingIndex(index);
  };

  const [playingIndex, setPlayingIndex] = useState(null);

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const renderCard = (item, index) => {
    const isPlaying = playingIndex === index;

    return (
      <div
        key={index}
        className="rounded-2xl overflow-hidden border h-[420px] lg:h-[460px] relative"
      >
        {!isPlaying ? (
          <>
            <img
              src={item.thumbnail}
              className="w-full h-full object-cover"
              alt=""
            />

            {/* Play Button */}
            <button
              onClick={() => handlePlay(index)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="w-16 h-16 rounded-full bg-black/70 text-white flex items-center justify-center text-2xl hover:bg-red-700 transition">
                ▶
              </span>
            </button>
          </>
        ) : (
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.video}
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  };

  return (
    <section className="py-12" id="events">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex justify-center text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800">
            <span className="font-normal text-orange-400">Because life</span> happens beyond{" "}
            <br />
            classrooms too
          </h2>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {gallery.map((item, index) => renderCard(item, index))}
        </div>

        {/* ✅ Mobile Slider */}
        <div className="lg:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {gallery.map((item, index) => (
              <div key={index} className="min-w-[80%]">
                {renderCard(item, index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;
