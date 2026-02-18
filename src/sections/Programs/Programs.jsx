import React, {useState} from 'react';
import { Tabs } from 'flowbite-react';
import programs from '../../data/data.json';
import ProgramCard from './ProgramCard';

const categoryLabels = {
  engineering: "Engineering",
  'business-management': "Business Management",
  architecture: "Architecture",
  design: "Design",
  'computer-applications': "Computer Applications"
};

const programData = programs;

function CategoryContent({ categoryKey, programs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!programs.length) {
    return <p className="text-center text-white/80">No programs available.</p>;
  }

  return (
    <div className="mt-6">
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 w-full">
        {/* LEFT PROGRAM LIST */}
        <div className="w-1/4 flex flex-col gap-2 lg:pe-4">
          {programs.map((program, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`course_btn text-left p-3 flex justify-between items-center transition
                ${activeIndex === i ? "active" : ""}`}
            >
              {program.program_name}
              <span>›</span>
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT — show only active */}
        <div className="w-3/4">
          <ProgramCard program={programs[activeIndex]} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4">
        {programs.map((program, i) => (
          <ProgramCard key={i} program={program} />
        ))}
      </div>
    </div>
  );
}

const Programs = () => {
  const customTheme = {
  tablist: {
    base: "flex flex-wrap justify-center gap-2 w-fit mx-auto", // optional spacing
    tabitem: {
  base: "level_btn rounded-none flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200",
      styles: {
        pills: {
          base: "", // removes default bg
          active: {
            on: "bg-[var(--light_yellow)] text-black shadow-none ring-0",
            off: "bg-transparent text-white hover:bg-white/10",
          },
        },
      },
    },
  },
};


  return (
    <section className="programs bg_gradient text-white py-12 mb-12" id="programs">
      <div className="mx-auto w-full px-4 lg:px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl lg:text-5xl text-white font-bold mb-8">Our Programs</h2>
        </div>

        <Tabs
          theme={customTheme}
          aria-label="Programs Tabs"
          variant="pills"
          className="justify-center w-full"
        >
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Tabs.Item key={key} title={label}>
              <CategoryContent
                categoryKey={key}
                programs={programData[key] || []}
              />
            </Tabs.Item>
          ))}
        </Tabs>
      </div>
    </section>
  );
};


export default Programs;