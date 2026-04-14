export default function CartridgeSlot() {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[38%] h-14 bg-cartridge rounded-t-xl z-[1] flex flex-col items-center justify-between py-2 px-3 shadow-lg">
      {/* Label area */}
      <div className="w-[80%] h-5 bg-cartridge-label/80 rounded-sm" />

      {/* Connector pins */}
      <div className="flex gap-1">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-2 bg-connector-pin rounded-b-sm"
          />
        ))}
      </div>
    </div>
  )
}
