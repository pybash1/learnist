export default function Testimonials() {
  return (
    <>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-neutral rounded-lg">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://storage.googleapis.com/tally-response-assets/r9K71e/d6eae068-12b7-4d56-a4ae-786b1e9a43ee/c377b347-c507-4cf6-81ff-65fca9d21823.jpg"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>

            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium sm:text-2xl text-white">
                looks good, does what it's supposed to do
              </p>

              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-sm text-gray-400 sm:ml-3">
                  <strong>soulninja</strong>
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
                  src="https://i.imgur.com/Yr4qpOe.png"
                  alt=""
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium sm:text-2xl text-white">
                OP Study platform
              </p>

              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-sm text-gray-400 sm:ml-3">
                  <strong>Sap</strong>
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
}
