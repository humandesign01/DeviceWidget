export default function DeviceBody({ children }) {
  return (
    <div className="w-full h-full rounded-full bg-device-body shadow-2xl relative overflow-visible ring-4 ring-device-body-dark/30">
      {children}
    </div>
  )
}
