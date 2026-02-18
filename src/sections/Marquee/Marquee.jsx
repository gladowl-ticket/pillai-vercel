const Marquee = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-yellow-400 z-[100] 
                 overflow-hidden rounded-t-2xl cursor-pointer
                 focus-within:[&_.marquee-inner]:paused
                 hover:[&_.marquee-inner]:paused
                 lg:rounded-t-2xl max-lg:rounded-none max-lg:bottom-[35px]"
      role="button"
      tabIndex={0}
      aria-label="Scrolling announcement"
    >
      <div className="marquee-inner inline-block whitespace-nowrap animate-marquee hover:paused focus:paused">
        <div className="text-black tracking-wide px-3 py-2">
          PULSE Entrance Exam 2026 - 100% Scholarships for top performers*
        </div>
      </div>
    </div>
  );
};

export default Marquee;
