import Image from "next/image";

export default function WatchSection() {
  const stats = [
    { value: "300M+", label: "Views", icon: "/icons/views.svg" },
    { value: "3M+", label: "Subscriber", icon: "/icons/subscribers.svg" },
    { value: "30+", label: "Episode", icon: "/icons/episodes.svg" },
    {
      value: "3000+",
      label: "Offline Attendance",
      icon: "/icons/attendance.svg",
    },
  ];
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="lg:mx-28 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {/* Icon Image */}
              <div className="mb-4 flex size-20 items-center justify-center rounded-2xl bg-[#F5F5DC] p-4 md:h-28 md:w-28 md:p-5 lg:h-32 lg:w-32 lg:p-6">
                <Image
                  src={stat.icon}
                  alt={`${stat.label} icon`}
                  className="h-full w-full object-contain"
                  width={80}
                  height={80}
                />
              </div>

              {/* Stat Value */}
              <div className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                {stat.value}
              </div>

              {/* Stat Label */}
              <div className="text-center text-sm font-medium whitespace-pre-line text-white md:text-sm lg:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/*  Heading */}
        <div className="mt-16 text-center md:mt-20">
          <h2 className="text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
            Our Video Podcast
          </h2>
        </div>

        {/* Video Section */}
        {/* Video Section */}
        <div className="mt-12 md:mt-16">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/uNzwo8l4P40?si=0MqMnA777mraRSrX"
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h3 className="text-lg leading-relaxed text-white md:text-xl lg:text-2xl font-bold">
              A safe space for open conversations
            </h3>
            <p className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg">
              Where you can question anything, think freely, and speak honestly
              without fear of being judged.
            </p>
          </div>

          {/* Watch Button */}
<div className="mt-8 flex flex-col lg:flex-row xs:flex-row gap-3 justify-center items-center md:mt-10 px-4 sm:px-0">
    <a
        href="https://youtube.com/playlist?list=PLSNt1tjjz_ArTDv1jVMjhHlaHM51euDq0&si=OqVnRwGtmnPrz-S5"
        className="
            w-full xs:w-44 sm:w-48 md:w-52
            inline-flex items-center justify-center
            rounded-lg bg-[#DA393C]
            px-6 py-3 sm:px-8 sm:py-3.5 md:py-4
            text-sm sm:text-base font-semibold text-white
            shadow-xl
            transition-all duration-200
            hover:scale-105 hover:bg-[#b52b2d] hover:shadow-2xl
            active:scale-95
            whitespace-nowrap
        "
        target="_blank"
        rel="noopener noreferrer"
    >
        Escape 2.0
    </a>
    <a
        href="https://youtube.com/playlist?list=PLSNt1tjjz_ArTDv1jVMjhHlaHM51euDq0&si=OqVnRwGtmnPrz-S5"
        className="
            w-full xs:w-44 sm:w-48 md:w-52
            inline-flex items-center justify-center
            rounded-lg bg-cream
            px-6 py-3 sm:px-8 sm:py-3.5 md:py-4
            text-sm sm:text-base font-semibold text-black
            shadow-xl
            transition-all duration-200
            hover:scale-105 hover:bg-cream hover:shadow-2xl
            active:scale-95
            whitespace-nowrap
        "
        target="_blank"
        rel="noopener noreferrer"
    >
        Watch Season 1
    </a>
</div>
        </div>
      </div>
    </section>
  );
}
