import TabPlaceholder from './tabs/TabPlaceholder'

export default function DeviceScreen({ activeTab }) {
  return (
    <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[62%] h-[42%] bg-screen-bezel rounded-2xl p-2 shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
      {/* Inner screen */}
      <div className="w-full h-full rounded-xl bg-gradient-to-b from-screen-bg-from to-screen-bg-to overflow-hidden relative">
        <div
          key={activeTab}
          className="w-full h-full p-3"
          style={{ animation: 'fadeIn 0.25s ease-out' }}
        >
          <TabPlaceholder tabIndex={activeTab} />
        </div>
      </div>

      {/* Page dot indicators */}
      <div className="flex gap-1.5 justify-center mt-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === activeTab ? 'bg-white/90' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
