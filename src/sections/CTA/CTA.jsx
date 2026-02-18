import BannerImg from "../../assets/cta/1.jpg";

const CTA = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div
          className="rounded-xl px-6 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3)),
              url(${BannerImg})
            `,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          {/* Left Content */}
          <div>
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
              <span className="font-light italic">
                SHAPING THE FUTURE WITH 50+ YEARS
              </span>
              <br />
              <span className="text-red-800 font-bold italic lg:pl-28">
                OF EDUCATIONAL EXCELLENCE
              </span>
            </h2>
          </div>

          {/* Right Button */}
          <div>
            <button className="mt-4 lg:mt-0 bg_y_gradient text-black font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2">
              Enquire Now
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
