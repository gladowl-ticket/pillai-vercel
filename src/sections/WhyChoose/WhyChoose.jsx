import whyChoose1 from '../../assets/why_choose/1.png';
import whyChoose2 from '../../assets/why_choose/2.png';
import whyChoose3 from '../../assets/why_choose/3.png';
import whyChoose4 from '../../assets/why_choose/4.png';
import whyChoose5 from '../../assets/why_choose/5.png';
import whyChoose6 from '../../assets/why_choose/6.png';
import whyChoose7 from '../../assets/why_choose/7.png';
import whyChoose8 from '../../assets/why_choose/8.png';
import WhyChooseDesk from './WhyChooseDesk';
import WhyChooseMobile from './WhyChooseMobile';

const WhyChoose = () =>{

    const whyChooseData = [
    {
    title: "Academic Excellence that Inspires",
    desc: "Experience world-class education with rigorous, industry-relevant programs designed to nurture innovation, critical thinking, and lifelong learning.",
    img1: whyChoose1,
    img2: whyChoose2,
    },
    {
    title: "State-of-the-Art Campus & Infrastructure",
    desc: "Study in a future-ready campus equipped with modern laboratories, smart classrooms, digital libraries, and collaborative innovation spaces.",
    img1: whyChoose3,
    img2: whyChoose4,
    },
    {
    title: "Strong Industry Partnerships for Career Success",
    desc: "Benefit from strategic tie-ups with top companies offering internships, live projects, and high-placement opportunities across leading sectors.",
    img1: whyChoose5,
    img2: whyChoose6,
    },
    {
    title: "Global Exposure & International Opportunities",
    desc: "Gain a global edge through student exchange programs, international research collaborations, and networking with global thought leaders.",
    img1: whyChoose7,
    img2: whyChoose8,
    },
    ];

return(
<section className="container pb-12">
    <div className="flex">
        <h2 className='text-5xl text-red-800 font-bold mb-8'>Why Should You Choose <br /> Pillai University?</h2>
    </div>
    {/* desktop */}
    <div className="justify-center hidden lg:flex">
        <WhyChooseDesk whyChooseData={whyChooseData} />
    </div>
    {/* mobile */}
    <div className="justify-center flex lg:hidden">
        <WhyChooseMobile whyChooseData={whyChooseData} />
    </div>
</section>
);
}

export default WhyChoose;