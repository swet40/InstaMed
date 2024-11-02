export const ContactUs = () => {
  return (
    <>
      <section className="text-center p-5">
        <h2 className="mt-1 text-2xl font-bold text-gray-500">
          CONTACT <span className="text-black">US</span>
        </h2>
        <div className="flex justify-center items-start gap-10 mt-5">
          <div className="contact-image">
            <img src="/contact-us.jpg" className="w-80 rounded-lg" alt="Doctor with patients" />
          </div>
          <div className="max-w-[400] text-left">
            <div className="office-info">
              <h3 className="text-lg font-bold text-gray-500 mb-2">OUR OFFICE</h3>
              <p className="text-gray-600 mb-3 leading-6">
                54709 Willms Station
                <br />
                Suite 350, Washington, USA
              </p>
              <p className="text-gray-600 mb-3 leading-6">
                Tel: (415) 555-0132
                <br />
                Email: greatstackdev@gmail.com
              </p>
            </div>
            <div className="careers-info">
              <h3 className="text-lg font-bold text-gray-500 mb-2">CAREERS AT website-name</h3>
              <p className="text-gray-600 mb-3 leading-6">Learn more about our teams and job openings.</p>
              <button className="px-5 py-2 text-sm text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-200">Explore Jobs</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
