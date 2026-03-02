import Image from "next/image";

export function InfiniteScrollGallery() {
  const ITEM_SIZE = 200;
  const GAP = 12;

  const imageRectangle = [
    {
      name: "",
      image: "/images/rectangle4.png",
    },
    {
      name: "2",
      image: "/images/rectangle5.png",
    },
    {
      name: "3",
      image: "/images/rectangle6.png",
    },
    {
      name: "3",
      image: "/images/rectangle7.png",
    },
    {
      name: "4",
      image: "/images/rectangle8.png",
    },
  ];
  const scrollItems = [...imageRectangle, ...imageRectangle, ...imageRectangle];
  const SET_WIDTH =
    imageRectangle.length * ITEM_SIZE + imageRectangle.length * GAP;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrolling track — starts at -SET_WIDTH and moves right to 0 */}
      <div
        className="scroll-track flex gap-3 py-3"
        style={{ width: "max-content" }}
      >
        {scrollItems.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="relative shrink-0 overflow-hidden"
            style={{ width: `${ITEM_SIZE}px`, height: `${ITEM_SIZE}px` }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <style>{`
                @keyframes scrollRight {
                    0%   { transform: translateX(-${SET_WIDTH}px); }
                    100% { transform: translateX(0px); }
                }

                .scroll-track {
                    animation: scrollRight 20s linear infinite;
                }

                .scroll-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
    </div>
  );
}
