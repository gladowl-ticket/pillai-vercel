import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react";

const WhyChooseMobile = ({whyChooseData}) =>{

return(
      <div className="w-full lg:w-4/5">
        <Accordion>
          {whyChooseData.map((item, i) => {
            return(

            <AccordionPanel key={i} className="group border-b border-red-800">
              
              {/* HEADER */}
              <AccordionTitle  className="p-0">
                <div className="grid lg:grid-cols-2 w-full items-center">
                  
                  {/* LEFT TEXT */}
                  <div className="flex p-4">
                    <span className="text-4xl font-bold text-gray-300 mr-4">
                      0{i + 1}
                    </span>

                    <div>
                      <h4 className="font-bold text-black">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </AccordionTitle>

              {/* MOBILE CONTENT */}
              <AccordionContent className="lg:hidden">
                <p className="mb-4 text-gray-600">{item.desc}</p>
                <div className="flex gap-3">
                  <img src={item.img1} className="w-1/2 rounded-lg" />
                  <img src={item.img2} className="w-1/2 rounded-lg" />
                </div>
              </AccordionContent>
            </AccordionPanel>
            );
        }       )}
        </Accordion>
      </div>
);
}

export default WhyChooseMobile;