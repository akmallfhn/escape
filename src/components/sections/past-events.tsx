import Image from "next/image";

export default function PastEventSection() {
  return (
    <section className="bg-black py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        {/* Section Title */}
        <div className="mb-12 text-left mx-5 lg:mx-22 md:mb-16">
          <h2 className="text-3xl font-bold text-cream uppercase md:text-4xl lg:text-5xl">
            Past Event
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-0 px-0 md:px-18">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-4/3 overflow-hidden">
              <Image
                src="/images/mdn.png"
                alt="Medan Event"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase md:text-xs">
                    Rumah Tangga
                  </p>
                  <h3 className="text-2xl font-light text-white uppercase md:text-3xl lg:text-4xl">
                    Medan
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-bold text-white md:text-2xl">
                    800+
                  </span>
                  <span className="text-[10px] text-gray-300 uppercase md:text-xs">
                    Attendees
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-4/3 overflow-hidden">
              <Image
                src="/images/bdg.png"
                alt="Bandung Event"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase md:text-xs">
                    EGO
                  </p>
                  <h3 className="text-2xl font-light text-white uppercase md:text-3xl lg:text-4xl">
                    Bandung
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-bold text-white md:text-2xl">
                    1000+
                  </span>
                  <span className="text-[10px] text-gray-300 uppercase md:text-xs">
                    Attendees
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-4/3 overflow-hidden">
              <Image
                src="/images/jkt.png"
                alt="Jakarta Event"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase md:text-xs">
                    ASCEND
                  </p>
                  <h3 className="text-2xl font-light text-white uppercase md:text-3xl lg:text-4xl">
                    Jakarta
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-bold text-white md:text-2xl">
                    1200+
                  </span>
                  <span className="text-[10px] text-gray-300 uppercase md:text-xs">
                    Attendees
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Testimonial Section ── */}
        <div className="mt-16 md:mt-24 lg:pl-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* Left: Text */}
            <div className="shrink-0 lg:w-80 xl:w-96">
              <h3 className="mb-6 text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
                What they say
                <br />
                about us!
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-sm">
                Mayoritas audience menilai kekuatan ESCAPE ada pada chemistry
                yang solid, obrolan longkrongan yang natural namun tetap kritis
                dan berisi, interaksi serta quiz/games yang melibatkan penonton,
                serta ambience yang aman, fun, dan tidak menghakimi sehingga
                insight terasa dalam tapi tetap ringan dan menghibur.
              </p>
            </div>

            {/* ── MOBILE: vertical stacked with overlapping quotes ── */}
            <div className="flex flex-col md:hidden" style={{ gap: "40px" }}>
              <div className="relative">
                <svg
                  className="absolute -top-4 left-1 h-12 w-12 text-white z-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <div className="relative w-4/5 rounded-2xl overflow-hidden aspect-4/3">
                  <Image
                    src="/images/rectangle1.png"
                    alt="Testimonial 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-0 w-3/5 rounded-xl bg-[#2C2C2C]/95 p-3 z-10 shadow-lg">
                  <p className="text-xs leading-snug text-gray-200">
                    "Obrolannya kayak tongkrongan gituu, lucu sama spontan tapi
                    tetep dalem dan bikin mikir."
                  </p>
                </div>
              </div>
              <div className="relative flex justify-end">
                <div className="relative w-4/5 rounded-2xl overflow-hidden aspect-4/3">
                  <Image
                    src="/images/rectangle3.png"
                    alt="Testimonial 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-9 left-0 w-3/5 rounded-xl bg-[#2C2C2C]/95 p-3 z-10 shadow-lg">
                  <p className="text-xs leading-snug text-gray-200">
                    "jujurr escape itu hidup banget gara-gara chemistry 4 orang
                    itu, gacorrrr parahhh!"
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-4/5 rounded-2xl overflow-hidden aspect-4/3">
                  <Image
                    src="/images/rectangle2.png"
                    alt="Testimonial 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-0 w-3/5 rounded-xl bg-[#2C2C2C]/95 p-3 z-10 shadow-lg">
                  <p className="text-xs leading-snug text-gray-200">
                    "segmen kaya ngobrol dipanggung sama sesi platinum tuh bikin
                    berasa di dalem tongkrongan mereka bangetttt"
                  </p>
                </div>
              </div>
            </div>

            {/* ── TABLET + DESKTOP: overlapping layout matching screenshot ── */}
            <div className="hidden md:block md:flex-1 md:min-w-0">
              <div
                className="relative"
                style={{ height: "clamp(260px, 32vw, 400px)" }}
              >
                {/* Large opening quote mark — top-left, over image 1 */}
                <svg
                  className="absolute text-white z-30"
                  style={{
                    left: "1%",
                    top: "8%",
                    width: "56px",
                    height: "56px",
                  }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>

                {/* 3 overlapping images */}
                <div
                  className="absolute flex items-stretch"
                  style={{ top: "10%", left: "0", right: "0", height: "67%" }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden z-20 shrink-0"
                    style={{ width: "36%" }}
                  >
                    <Image
                      src="/images/rectangle1.png"
                      alt="Testimonial 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden z-30 shrink-0"
                    style={{ width: "36%", marginLeft: "-5%" }}
                  >
                    <Image
                      src="/images/rectangle3.png"
                      alt="Testimonial 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden z-20 flex-1"
                    style={{ marginLeft: "-5%" }}
                  >
                    <Image
                      src="/images/rectangle2.png"
                      alt="Testimonial 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Quote bubbles */}
                <div
                  className="absolute rounded-xl bg-[#2C2C2C] p-3 shadow-xl z-40"
                  style={{ top: "0%", right: "30%", width: "40%" }}
                >
                  <p className="text-xs leading-relaxed text-gray-200">
                    "segmen kaya ngobrol dipanggung sama sesi platinum tuh bikin
                    berasa di dalem tongkrongan mereka bangetttt"
                  </p>
                </div>
                <div
                  className="absolute rounded-xl bg-[#2C2C2C] p-3 shadow-xl z-40"
                  style={{ bottom: "20%", left: "0%", width: "38%" }}
                >
                  <p className="text-xs leading-relaxed text-gray-200">
                    "Obrolannya kayak tongkrongan gituu, lucu sama spontan tapi
                    tetep dalem dan bikin mikir."
                  </p>
                </div>
                <div
                  className="absolute rounded-xl bg-[#2C2C2C] p-3 shadow-xl z-40"
                  style={{ bottom: "20%", right: "0%", width: "33%" }}
                >
                  <p className="text-xs leading-relaxed text-gray-200">
                    "jujurr escape itu hidup banget gara-gara chemistry 4 orang
                    itu, gacorrrr parahhh!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
