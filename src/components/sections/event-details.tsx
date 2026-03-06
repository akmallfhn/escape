import Image from "next/image";

interface EventData {
  id: string;
  title: string;
  venue_name: string;
  venue_sub: string;
  address: string;
  description: string;
  event_date: string;
  event_time: string;
  capacity: string;
  hero_image_url: string;
  ticket_url: string;
}

async function getActiveEvent(): Promise<EventData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/events`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function EventDetailSection() {
  const event = await getActiveEvent();

  if (!event) {
    return (
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-gray-500">
          No upcoming events.
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
              <Image
                src={event.hero_image_url ?? '/images/event.png'}
                alt={event.title ?? ''}
                width={660}
                height={680}
                className="w-full h-auto object-cover"
                unoptimized={!!event.hero_image_url?.startsWith('http')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl leading-none">
                {event.venue_name}
              </h2>
            </div>

            <p className="text-base font-medium text-gray-300 md:text-lg">
              {event.venue_sub}
            </p>

            <p className="text-sm leading-relaxed text-gray-400 md:text-base max-w-md">
              {event.address}
            </p>

            <p className="text-sm leading-relaxed text-gray-300 md:text-base max-w-lg">
              {event.description}
            </p>

            <div className="w-full border-t border-white/10" />

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-white md:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </span>
                <span className="font-medium">{event.event_date}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white md:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <span className="font-medium">{event.event_time}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white md:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <span className="font-medium">{event.capacity} Capacity</span>
              </li>
            </ul>

            <div className="mt-2">
              <a
                href={event.ticket_url}
                className="inline-flex items-center justify-center rounded-xl bg-[#DA393C] px-10 py-4 text-sm font-bold tracking-widest text-white shadow-lg shadow-[#DA393C]/30 transition-all duration-200 hover:bg-[#b52b2d] active:scale-95 md:text-base"
              >
                Buy Now!
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}