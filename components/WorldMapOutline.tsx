export function WorldMapOutline() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <svg
        viewBox="0 0 1000 500"
        className="absolute w-full h-full min-w-[150%] min-h-[150%] -left-1/4 -top-1/4"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M150 250 Q200 200 250 250 T350 250 Q400 200 450 250 T550 250 Q600 200 650 250 T750 250 Q800 200 850 250 L850 350 Q800 400 750 350 T650 350 Q600 400 550 350 T450 350 Q400 400 350 350 T250 350 Q200 400 150 350 Z M300 150 Q350 100 400 150 T500 150 Q550 100 600 150 T700 150 L700 200 Q650 250 600 200 T500 200 Q450 250 400 200 T300 200 Z M200 100 Q250 50 300 100 T400 100 L400 150 Q350 200 300 150 T200 150 Z M600 50 Q650 0 700 50 T800 50 L800 100 Q750 150 700 100 T600 100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-teal-400"
        />
      </svg>
    </div>
  );
}
