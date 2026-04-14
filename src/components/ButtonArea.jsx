export default function ButtonArea({ onCycleTab }) {
  return (
    <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2">
      {/* Orange chevron accent */}
      <div
        className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 bg-cartridge mx-auto"
        style={{ clipPath: 'polygon(10% 0%, 90% 0%, 50% 100%)' }}
      />

      {/* D-pad button */}
      <button
        onClick={onCycleTab}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-button-primary hover:bg-button-hover active:scale-95 cursor-pointer shadow-lg transition-all duration-150 flex items-center justify-center z-10"
      >
        {/* Arrow indicators */}
        <div className="relative w-full h-full pointer-events-none select-none">
          {/* Up */}
          <svg className="absolute top-1 left-1/2 -translate-x-1/2" width="8" height="6" viewBox="0 0 8 6">
            <polygon points="4,0 8,6 0,6" fill="currentColor" opacity="0.5" />
          </svg>
          {/* Down */}
          <svg className="absolute bottom-1 left-1/2 -translate-x-1/2" width="8" height="6" viewBox="0 0 8 6">
            <polygon points="4,6 0,0 8,0" fill="currentColor" opacity="0.5" />
          </svg>
          {/* Left */}
          <svg className="absolute left-1 top-1/2 -translate-y-1/2" width="6" height="8" viewBox="0 0 6 8">
            <polygon points="0,4 6,0 6,8" fill="currentColor" opacity="0.5" />
          </svg>
          {/* Right */}
          <svg className="absolute right-1 top-1/2 -translate-y-1/2" width="6" height="8" viewBox="0 0 6 8">
            <polygon points="6,4 0,0 0,8" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      </button>
    </div>
  )
}
