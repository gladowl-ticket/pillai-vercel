import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MobileProgramCard from "./MobileProgramCard";
import { BsBook } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function ProgramCard({ program, categoryKey, index }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopProgramCard program={program} />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileProgramCard
          program={program}
          categoryKey={categoryKey}
          index={index}
        />
      </div>
    </>
  );
}

function DesktopProgramCard({ program }) {
  return (
    <div className="border border-dark-red rounded-lg bg_dark_red pt-5 ps-01 overflow-hidden text-white">
      <h4 className="text-xl lg:text-2xl font-semibold text-white">
        {program.program_name}
      </h4>
      <p className="text-sm text-white">{program.School_name}</p>

      {/* WHAT YOU WILL LEARN */}
      <SectionCarousel
        title="What you will learn"
        icon={<BsBook />}
        slides={[
          {
            title: "Overview",
            content: (
              <div className="w-full lg:max-w-[75%]">
                <HtmlText className="text-white" html={program.Overview} />
              </div>
            ),
            img: getProgramImage(program.img_src, 1),
          },
          {
            title: "Highlights",
            content: <List items={program.Highlights} />,
            img: getProgramImage(program.img_src, 2),
          },
          {
            title: "Specialization",
            content: <List items={program.Specialization} />,
            img: getProgramImage(program.img_src, 3),
          },
        ]}
      />

      {/* ELIGIBILITY & CAREER */}
      <SectionCarousel
        title="From Eligibility to Career Success"
        icon={<BsPencil />}
        slides={[
          {
            title: "Eligibility",
            content: <List items={program.Eligibility} />,
            img: getProgramImage(program.img_src, 4),
          },
          {
            title: "Career Opportunities",
            content: (
              <List
                items={program["Career Opportunities"] || program.Career}
                layout="grid"
              />
            ),
            img: getProgramImage(program.img_src, 5),
          },
        ]}
      />
    </div>
  );
}

function SectionCarousel({ title, icon, slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // ❗ required for disabling buttons
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi || !canScrollPrev) return;
    emblaApi.scrollPrev();
  }, [emblaApi, canScrollPrev]);

  const scrollNext = useCallback(() => {
    if (!emblaApi || !canScrollNext) return;
    emblaApi.scrollNext();
  }, [emblaApi, canScrollNext]);

  return (
    <div className="relative py-6 program_carousel">
      <div className="flex items-center gap-3 mb-4">
        <div className="program_desc_i bg-yellow-400 text-black flex items-center justify-center fs_12">
          {icon}
        </div>
        <span className="font-medium -ms-6">{title}</span>
      </div>

      <div className="overflow-hidden ps-5" ref={emblaRef}>
        <div className="flex -ms-5 pb-1">
          {slides.map((slide, i) => (
  <div
    key={i}
    className="flex-[0_0_100%] lg:flex-[0_0_80%] px-2 flex"
  >
    <div className="item border border-light-red rounded-md p-3 lg:p-4 relative overflow-hidden bg_dark_red h-full w-full flex flex-col">
      
      <h4 className="font-semibold mb-2 relative z-10">
        {slide.title}
      </h4>

      <div className="text-sm space-y-2 relative z-10 flex-grow">
        {slide.content}
      </div>

      {slide.img && (
        <img
          src={slide.img}
          alt=""
          className="absolute right-0 top-0 h-full w-auto object-cover"
        />
      )}
    </div>
  </div>
))}

        </div>
      </div>

      {/* Buttons */}
      <div className="program_carousel_nav hidden lg:flex gap-2">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`w-8 h-8 rounded-full flex items-center justify-center
            ${
              canScrollPrev
                ? "bg-orange-400 text-black"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
          aria-label="Previous"
        >
          <BsArrowLeft />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`w-8 h-8 rounded-full flex items-center justify-center
            ${
              canScrollNext
                ? "bg-orange-400 text-black"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
          aria-label="Next"
        >
          <BsArrowRight />
        </button>
      </div>

      <div className="bg_overlay_program absolute"></div>
    </div>
  );
}

function List({ items = [], layout = "stack" }) {
  const isGrid = layout === "grid";
  const containerClassName = isGrid
    ? "grid grid-cols-1 lg:grid-cols-3 gap-x-4"
    : "space-y-2";
  const textClassName = isGrid
    ? "text-sm text-white"
    : "text-sm text-white w-full lg:max-w-[75%]";

  return (
    <div className={containerClassName}>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start mb-2">
          <span className="text-yellow-400">★</span>
          <HtmlText className={textClassName} html={item} />
        </div>
      ))}
    </div>
  );
}

function HtmlText({ html, className = "" }) {
  if (!html) return null;

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function getProgramImage(type, index) {
  if (!type || !index) return null;

  return new URL(
    `../../assets/programs/${type}-img/${index}.png`,
    import.meta.url,
  ).href;
}
