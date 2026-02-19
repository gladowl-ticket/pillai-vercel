import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { BsBook } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const accordionTheme = {
  title: {
    base: "flex w-full items-center justify-between p-0 text-left font-medium text-white rounded-lg",
    flush: {
      off: "hover:bg-red-800 focus:ring-0 dark:hover:bg-red-800",
      on: "bg-transparent"
    },
    open: {
      off: "",
      on: "bg-red-900 text-white"
    },
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    }
  },
  content: {
    base: "p-0 bg-transparent border-0"
  }
};



function MobileProgramCard({ program, categoryKey, index }) {
  return (
    <Accordion theme={accordionTheme} collapseAll className="mobile_accordion border-0">
      <AccordionPanel className="hover:text-red-800">
        <AccordionTitle className="bg-red-900 text-white rounded-lg border text-md border-white hover:!bg-red-800">
          {program.program_name}
        </AccordionTitle>
        <AccordionContent className="p-0 mt-2 border-white rounded-lg border">
          <div className="bg_dark_red text-white rounded-xl p-4">
            <h4 className="font-semibold text-xl">{program.School_name}</h4>

            <SectionCarousel
              title="What you will learn"
              icon={<BsBook/>}
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

            <SectionCarousel
              title="From Eligibility to Career Success"
              icon={<BsPencil/>}
              slides={[
                {
                  title: "Eligibility",
                  content: <List items={program.Eligibility} />,
                  img: getProgramImage(program.img_src, 4),
                },
                {
                  title: "Career Opportunities",
                  content: <List items={program["Career Opportunities"] || program.Career} />,
                  img: getProgramImage(program.img_src, 5),
                },
              ]}
            />
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}

function List({ items = [] }) {
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className="text-yellow-400">★</span>
          <HtmlText className="text-sm text-white" html={item} />
        </div>
      ))}
    </>
  );
}

function HtmlText({ html, className = "" }) {
  if (!html) {
    return null;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function getProgramImage(type, index) {
  if (!type || !index) {
    return null;
  }

  return new URL(
    `../../assets/programs/${type}-img/${index}.png`,
    import.meta.url
  ).href;
}

function SectionCarousel({ title, icon, slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    speed: 8,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update dots
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative py-6 program_carousel pb-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="program_desc_i bg-yellow-400 text-black flex items-center justify-center fs_12">
          {icon}
        </div>
        <span className="font-medium text-md -ms-4">{title}</span>
      </div>

      {/* Carousel */}
<div className="relative">
  <div className="overflow-hidden md:pl-0 pl-6" ref={emblaRef}>
    <div className="flex gap-6 items-stretch">
      {slides.map((slide, i) => (
        <div key={i} className="min-w-full flex">
          <div className="item border border-light-red rounded-xl p-4 relative overflow-hidden bg_dark_red flex flex-col h-full w-full">
            <h4 className="font-semibold mb-2">{slide.title}</h4>
            <div className="text-sm space-y-2 text-white flex-grow">{slide.content}</div>

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


        {/* NAV ARROWS */}
        <div className="program_carousel_nav">
          <button
            onClick={scrollPrev}
            className="bg-[var(--light_yellow)] text-black w-8 h-8 rounded-full flex items-center justify-center"
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="bg-[var(--light_yellow)] text-black w-8 h-8 rounded-full flex items-center justify-center"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="bg_overlay_program absolute"></div>
    </div>
  );
}


export default MobileProgramCard;