import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-20 md:bottom-10 right-6 z-50 h-10 w-10
        p-0 rounded-full shadow-lg
        bg-orange-400 text-black
        hover:bg-orange-400 transition
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
}