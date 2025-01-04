import heroImg from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="bg-white ">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
            Building digital <br />
            products &amp; brands.
          </h1>
          <p className="max-w-2xl mb-6 font-normal text-gray-500  lg:mb-8 md:text-lg lg:text-xl ">
            Here at flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="space-y-6 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none "
            >
              Start 30 day free trial
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
            >
              Pricing & FAQ
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
