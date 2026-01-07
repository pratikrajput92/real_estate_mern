const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 grid md:grid-cols-2 gap-10">

      
      <div>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded mb-4 h-32"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </div>

      {/* yha pr map ki link dali ha  */}
      <iframe
        src="https://www.google.com/maps?q=Delhi&output=embed"
        className="w-full h-[70vh] rounded-xl border"
        loading="lazy"
      ></iframe>

    </div>
  );
};

export default Contact;
