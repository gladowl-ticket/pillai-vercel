import { useState } from "react";
import { Drawer, DrawerItems} from "flowbite-react";

const ApplyNowDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      {/* Program and Apply Now Buttons (Mobile Only for Program) */}
      <div className="fixed right-0 bottom-0 flex w-full lg:top-1/2 lg:right-[17px] lg:bottom-auto lg:w-auto z-[1021] lg:-translate-y-1/2">
        {/* Program Button: mobile only */}
        <button
          onClick={() => {
            const el = document.getElementById('programs');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.hash = '#programs';
            }
          }}
          className="w-1/2 px-4 py-2 text-black bg_y_gradient border-r border border-black rounded-none rounded-bl-lg block lg:hidden"
          type="button"
        >
          Program
        </button>
        {/* Apply Now Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-1/2 lg:w-auto px-4 md:py-3 py-2 text-black bg_y_gradient bg-gradient-to-r border lg:rotate-90 lg:origin-right lg:rounded-b-lg block rounded-none rounded-br-lg lg:rounded-b-lg"
          type="button"
        >
          <span className="lg:rotate-180 inline-block">Apply Now</span>
        </button>
      </div>



      {/* Drawer (Offcanvas) */}
      <Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  backdrop={false}
  className="!bg-transparent flex items-center justify-center p-2 w-full md:w-[400px]"
>
  <DrawerItems className="h-full"> 
    <div className="bg-white rounded-2xl shadow-lg px-4 pt-4 w-full h-full border border-red-800 relative flex flex-col md:w-[400px]">
      
      {/* Close */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 left-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* Content */}
      <h4 className="text-lg font-semibold text-center mt-4">
        Apply Now
      </h4>

      <p className="!text-red-800 text-center text-sm mt-2 px-2 py-1 rounded">
        Enquire about the PULSE Entrance Exam and get 100% scholarship*.
      </p>

      {/* Form fills remaining height */}
      <iframe
        title="Apply Form"
        className="w-full flex-1 border-0"
        src="https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/PillaiIndex2026/formperma/UY1ZlmLotzsaSAuRm-KQ8THyUJhu78ruimnfSlNyT8k"
      />
    </div>
  </DrawerItems>
</Drawer>

    </>
  );
};

export default ApplyNowDrawer;
