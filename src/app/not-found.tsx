import Image from "next/image";
import LogoIcon from "@/components/icons/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Minimal header */}
      <header className="px-8 py-6 md:px-12 lg:px-16">
        <LogoIcon width="36" height="36" />
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center">
        <div className="w-full mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left column — text */}
            <div className="order-2 md:order-1">
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#fcfae1", opacity: 0.7 }}
              >
                THIS PAGE IS
              </p>

              <h1
                className="font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  color: "#fcfae1",
                  lineHeight: 0.95,
                }}
              >
                UNDER
                <br />
                MAINTENANCE
              </h1>

              <div
                className="mt-8 h-px w-12"
                style={{ background: "#DA393C" }}
              />

              <p
                className="mt-6 text-sm leading-relaxed max-w-xs"
                style={{ color: "#fcfae1", opacity: 0.55 }}
              >
                Just as a mind needs a moment of silence to find a new
                perspective, we are recalibrating our digital home. We are
                currently preparing a deeper experience for escape 2.0.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="/"
                  className="inline-block rounded-lg px-7 py-3 text-sm font-bold text-white uppercase tracking-wide transition-all hover:scale-105 active:scale-95"
                  style={{ background: "#DA393C" }}
                >
                  Go Home
                </a>
                <a
                  href="https://www.instagram.com/at.escape/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-opacity hover:opacity-60"
                  style={{ color: "#fcfae1", opacity: 0.6 }}
                >
                  Follow us →
                </a>
              </div>
            </div>

            {/* Right column — card image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-72 md:w-80 lg:w-96">
                <Image
                  src="/images/RedCard.png"
                  alt="Escape card"
                  width={400}
                  height={400}
                  className="w-full drop-shadow-2xl"
                  style={{
                    filter:
                      "drop-shadow(0 30px 60px rgba(218,57,60,0.25)) drop-shadow(0 10px 30px rgba(0,0,0,0.8))",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer note */}
      <footer className="px-8 py-6 md:px-12 lg:px-16 text-center">
        <p
          className="text-xs"
          style={{ color: "#fcfae1", opacity: 0.3 }}
        >
          © 2026 Escape. All rights reserved.
        </p>
      </footer>
    </div>
  );
}