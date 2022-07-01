export default function Testimonials() {
  return (
    <div className="max-w-5xl px-4 py-8 mx-auto">
      <section className="p-8 bg-neutral rounded-lg">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <blockquote className="sm:col-span-2">
            <p className="text-xl font-medium sm:text-2xl text-white">
              NO THANK YOU, YOU HELPED ME ENOUGH 🤡
            </p>

            <cite className="inline-flex items-center mt-8 not-italic">
              <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
              <p className="text-sm text-gray-400 uppercase sm:ml-3">
                <strong>SpongeBoi</strong>
              </p>
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
