
export const AboutUs = () => {
  return (
    <>
      <div className="h-screen">
        <section className="mt-7 px-10 py-5 text-center">
          <h2 className="text-2xl font-bold mb-5 text-gray-500">
            ABOUT <span className="text-black">US</span>
          </h2>
          <div className="flex items-start justify-center gap-10 mt-5">
            <div>
              <img
                src="/doc-team.jpg"
                className="w-72 text-left rounded-lg"
                alt="Doctor Team"
              />
            </div>
            <div className="max-w-[600px] text-left text-gray-500 leading-6">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                repellendus fugiat soluta dolore dolorum obcaecati molestias
                dolores nisi totam cumque, magnam, doloribus non dolorem eligendi
                possimus porro voluptas eum ipsam beatae? Ducimus numquam
                consequatur dolore.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
                distinctio, nisi rem, saepe unde cupiditate quae mollitia ab,
                adipisci tenetur nihil! Minima, quo veritatis? Facilis autem
                repellat aliquam. Id porro possimus tempore. Excepturi sunt, atque
                maxime facilis nulla accusamus veritatis!
              </p>
              <h3 className="font-bold text-lg mt-2 text-gray-950">Our Vision</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                iusto fuga facilis magni molestias perspiciatis doloribus, ducimus
                reiciendis nobis nisi eveniet ut maxime error vel asperiores!
                Earum illo qui atque?
              </p>
            </div>
          </div>
        </section>
        <section className="px-10 py-5 text-center mt-10">
          <h2 className="text-2xl font-bold text-gray-500">
            WHY <span className="text-black">CHOOSE US</span>
          </h2>
          <div className="flex justify-center gap-5 mt-5">
            <div className="p-5 w-48 rounded-lg border border-gray-400">
              <h4 className="text-lg font-bold text-gray-500 mb-2">
                EFFICIENCY:
              </h4>
              <p className="text-gray-600 leading-6">
                Streamlined Appointment Scheduling That Fits Into Your Busy
                Lifestyle.
              </p>
            </div>
            <div className="p-5 w-48 rounded-lg border border-gray-400">
              <h4 className="text-lg font-bold text-gray-500 mb-2">
                CONVENIENCE:
              </h4>
              <p className="text-gray-600 leading-6">
                Access To A Network Of Trusted Healthcare Professionals In Your
                Area.
              </p>
            </div>
            <div className="p-5 w-48 rounded-lg border border-gray-400">
              <h4 className="text-lg font-bold text-gray-500 mb-2">
                PERSONALIZATION:
              </h4>
              <p className="text-gray-600 leading-6">
                Tailored Recommendations And Reminders To Help You Stay On Top Of
                Your Health.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
