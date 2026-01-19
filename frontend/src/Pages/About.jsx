const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:overflow-hidden  pt-24 pb-20">

      <h1 className="text-4xl gap-2 flex flex-row text-rose-600 font-bold mb-6"><p className="text-4xl font-bold text-black">About</p> @pnaGhar</h1>

      <p className="text-gray-600 leading-relaxed mb-8">
        @pnaGhar is a modern real estate platform helping people find their
        dream homes with trust, transparency, and technology.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-indigo-100 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
          <p className="text-gray-600">Experience</p>
        </div>

        <div className="bg-indigo-100 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">500+</h3>
          <p className="text-gray-600">Properties Sold</p>
        </div>

        <div className="bg-indigo-100 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">1000+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>

      </div>

    </div>
  );
};

export default About;
