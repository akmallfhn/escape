import Escape from "@/components/icons/escape"; // adjust import path

export default function LogoScroll() {
    return (
        <div
            className="relative overflow-hidden py-0"
            style={{
                background: `#DA393C`,
            }}
        >
            <div className="animate-scroll-seamless flex">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`set1-${i}`}
                        className="mx-10 inline-flex shrink-0 items-center"
                    >
                        <Escape className="w-36 sm:w-48 lg:w-50 h-auto" />
                    </div>
                ))}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`set2-${i}`}
                        className="mx-10 inline-flex shrink-0 items-center"
                    >
                        <Escape className="w-36 sm:w-48 lg:w-50 h-auto" />
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes scroll-seamless {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-seamless {
                    animation: scroll-seamless 15s linear infinite;
                }
                .animate-scroll-seamless:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}