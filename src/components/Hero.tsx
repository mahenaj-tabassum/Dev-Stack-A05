import BannerImg from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="">
      <div className="lg:h-[90vh] grid items-center mt-20 lg:mt-0 text-center lg:text-left  lg:grid-cols-[2fr_1.4fr]">
        <div>
          <h2 className="font-bold text-[#0f172a] text-4xl md:text-6xl ">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#f97315fa] to-[#ec4899] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>
          <p className="md:text-[18px] text-gray-600 md:my-8 my-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex md:flex-row flex-col items-center justify-center lg:justify-start md:gap-6 gap-4">
            <button
              className="text-white bg-linear-to-r from-[#f97315] to-[#ec4899] px-4 py-2 rounded"
              type="button"
            >
              Explore Technologies
            </button>
            <button
              className="px-13 py-2 rounded border border-[#e5e7eb] bg-white"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
        <img
          className="w-full lg:translate-x-6"
          src={BannerImg}
          alt="Banner Image"
        />
      </div>
    </section>
  );
};

export default Hero;
