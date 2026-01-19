
const Stats = () => {
  return(
    <section className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8  text-center text-white">

          <div>
            <h3 className="text-4xl font-bold">
              1200+
            </h3>
            <p className="mt-2 text-lg">
              Properties
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              900+
            </h3>
            <p className="mt-2 text-lg">
              Happy Clients
            </p>
          </div>

           <div>
            <h3 className="text-4xl font-bold">
              15+
            </h3>
            <p className="mt-2 text-lg">
              Cities
            </p>
          </div>

           <div>
            <h3 className="text-4xl font-bold">
              24/7
            </h3>
            <p className="mt-2 text-lg">
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;