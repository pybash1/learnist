export default function Testimonials() {
  return (
    <>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-neutral rounded-lg">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium sm:text-2xl text-white">
                NO THANK YOU, YOU HELPED ME ENOUGH 🤡
              </p>

              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-sm text-gray-400 sm:ml-3">
                  <strong>SpongeBoi</strong>
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-neutral rounded-lg">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="https://i.imgur.com/XX9858j.png"
                  alt=""
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium sm:text-2xl text-white">
                nice help sir, i got 10/10 on my test and barely didn&apos;t fail. my
                parents also didn&apos;t hit me. +1 recommendation
              </p>

              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-sm text-gray-400 sm:ml-3">
                  <strong>mhmadidas</strong>
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}
