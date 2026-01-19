
const HowItWorks = () => {
   return(
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
           How It 
          <span className="text-blue-700 px-2">Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="bg-white p-8 rounded-xl shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Choose Property</h3>
              <p className="text-gray-600">
                Browse verified properties that match your needs.
              </p>
            </div>

             <div className="bg-white p-8 rounded-xl shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Contact Again</h3>
              <p className="text-gray-600">
                Get in touch with agents directly and schedule visits.
              </p>
            </div>

             <div className="bg-white p-8 rounded-xl shadow">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="text-xl font-semibold mb-2">Get Your Home</h3>
              <p className="text-gray-600">
                 Finalize the deal and move into your dream home.
              </p>
            </div>

          </div>
      </div>
    </section>
   );
};

export default HowItWorks;