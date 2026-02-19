import Img1 from "../../assets/infra/1.jpg";
import Img2 from "../../assets/infra/2.jpg";
import Img3 from "../../assets/infra/3.jpg";
import Img4 from "../../assets/infra/4.jpg";
import Img5 from "../../assets/infra/5.jpg";
import Img6 from "../../assets/infra/6.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Infrastructure = () => {
  return (
    <section className="pb-12">
      <div className="container">
        {/* Heading */}
        <div className="mb-8">
          <h6 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
            Our Infrastructure
          </h6>

          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mt-2">
            Experience a vibrant{" "}
            <span className="text-orange-400 font-normal">campus life</span>
            <br />
            that goes beyond academics
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl">
            Our state-of-the-art infrastructure provides students with an
            environment that fosters creativity, collaboration, and growth.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <img
                src={img}
                alt={`Infrastructure ${index + 1}`}
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
