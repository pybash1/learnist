export default function Testimonials() {
  return (
    <div className="max-w-5xl px-4 py-8 mx-auto">
      <section className="p-8 bg-neutral rounded-lg">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>

            <div className="absolute inline-flex px-4 py-2 bg-primary rounded-lg shadow-xl -bottom-4 -right-4">
              <span className="inline-block w-12 h-10 bg-neutral rounded-lg"></span>
            </div>
          </div>

          <blockquote className="sm:col-span-2">
            <p className="text-xl font-medium sm:text-2xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
              autem alias.
            </p>

            <cite className="inline-flex items-center mt-8 not-italic">
              <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
              <p className="text-sm text-gray-400 uppercase sm:ml-3">
                <strong>John Doe</strong>, Random Co.
              </p>
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
