import useEmblaCarousel from "embla-carousel-react";
import MobileProgramCard from "./MobileProgramCard";

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
    <div className="border border-dark-red rounded-3xl bg_dark_red pt-5 ps-01 overflow-hidden text-white">
      <h4 className="text-xl lg:text-2xl font-semibold text-white">
        {program.program_name}
      </h4>
      <p className="text-sm text-white">{program.School_name}</p>

      {/* WHAT YOU WILL LEARN */}
      <SectionCarousel
        title="What you will learn"
        icon="📘"
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
        icon="✏️"
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
    loop: true,
    align: "start",
    speed: 8,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative py-6 program_carousel">
      <div className="flex items-center gap-3 mb-4">
        <div className="program_desc_i bg-yellow-400 text-black flex items-center justify-center fs_12">
          {icon}
        </div>
        <span className="font-medium">{title}</span>
      </div>

      <div className="overflow-hidden ps-5" ref={emblaRef}>
        <div className="flex -ms-5">
          {slides.map((slide, i) => (
            <div key={i} className="flex-[0_0_100%] lg:flex-[0_0_80%] px-2">
              <div className="item border border-light-red rounded-xl p-3 lg:p-4 relative overflow-hidden bg_dark_red">
                <h4 className="font-semibold mb-2 relative z-10">
                  {slide.title}
                </h4>
                <div className="text-sm space-y-2 relative z-10">
                  {slide.content}
                </div>

                {slide.img && (
                  <img
                    src={slide.img}
                    alt=""
                    className="absolute right-0 top-0 h-full w-auto opacity-20"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="program_carousel_nav hidden lg:flex gap-2">
        <button
          type="button"
          onClick={scrollPrev}
          className="w-8 h-8 rounded-full bg-[var(--light_yellow)] text-black flex items-center justify-center"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="w-8 h-8 rounded-full bg-[var(--light_yellow)] text-black flex items-center justify-center"
          aria-label="Next"
        >
          ›
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
  if (!html) {
    return null;
  }

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function getProgramImage(type, index) {
  if (!type || !index) {
    return null;
  }

  return new URL(
    `../../assets/programs/${type}-img/${index}.png`,
    import.meta.url,
  ).href;
}
