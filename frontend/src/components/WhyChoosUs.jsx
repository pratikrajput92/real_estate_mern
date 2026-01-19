
const WhyChooseUs = () => {
   return(
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl  font-bold text-center mb-12">
          Why Choose 
          <span className="text-rose-600 px-2">@pnaGhar</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              Verified Properties
            </h3>
            <p className="text-gray-600">
              All listings are verified to ensure safe and trusted deals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              Best Price
            </h3>
            <p className="text-gray-600">
               Get the best market price with zero hidden charges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              Trusted Support
            </h3>
            <p className="text-gray-600">
               24/7 support to help you at every step.
            </p>
          </div>
        </div>

      </div>
    </section>
   );
};

export default WhyChooseUs;