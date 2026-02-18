import {
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";
import { useState } from "react";

const WhyChooseDesk = ({whyChooseData}) =>{
    const [openIndex, setOpenIndex] = useState(0);

return(
      <div className="w-full lg:w-4/5">
        <Accordion className="border-0 ">
          {whyChooseData.map((item, i) => {
            const isOpen = openIndex === i;
            return(
 
            <AccordionPanel key={i} className="group border-b border-red-800 outline-0 ">
              
              {/* HEADER */}
              <AccordionTitle onClick={() => setOpenIndex(isOpen ? null : i)} className="p-0 bg-white hover:bg-white border-b-2 border-red-800 outline-0">
                <div className="grid lg:grid-cols-2 w-full items-center">
                  
                  {/* LEFT TEXT */}
                  <div className="flex p-4">
                    <span className="text-5xl font-bold text-gray-300 mr-4">
                      0{i + 1}
                    </span>

                    <div>
                      <h4 className="font-bold text-xl text-black">{item.title}</h4>

                      {/* DESKTOP DESCRIPTION */}
                          {isOpen && (
                            <div className="hidden lg:block">
                              <div className="w-10 h-px bg-black my-3"></div>
                              <p className="text-gray-600 text-md">{item.desc}</p>
                            </div>
                          )}
                    </div>
                  </div>

                  {/* DESKTOP IMAGES */}
                  {isOpen && (
                    <div className="hidden lg:flex gap-3 p-4">
                      <img src={item.img1} className="w-1/2 rounded-lg" />
                      <img src={item.img2} className="w-1/2 rounded-lg" />
                    </div>
                  )}
                </div>
              </AccordionTitle>
            </AccordionPanel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default WhyChooseDesk;
