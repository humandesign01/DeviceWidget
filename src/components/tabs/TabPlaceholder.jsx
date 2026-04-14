function StatsTab() {
  const bars = [60, 85, 45, 70, 90]
  return (
    <div className="h-full flex flex-col">
      <p className="text-[10px] font-bold text-teal-900/70 uppercase tracking-wider mb-1">Stats</p>
      <div className="flex-1 flex items-end gap-1.5 pb-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-teal-700/40 rounded-t-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function ActivityTab() {
  return (
    <div className="h-full flex flex-col">
      <p className="text-[10px] font-bold text-teal-900/70 uppercase tracking-wider mb-2">Activity</p>
      <div className="flex flex-col gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-700/30 shrink-0" />
            <div
              className="h-2 bg-teal-700/20 rounded-full"
              style={{ width: `${70 - i * 12}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function StatusTab() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-2">
      <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
      <p className="text-[11px] font-bold text-teal-900/70">All Systems Active</p>
      <p className="text-[9px] text-teal-800/50">12 nodes connected</p>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="h-full flex flex-col">
      <p className="text-[10px] font-bold text-teal-900/70 uppercase tracking-wider mb-2">Settings</p>
      <div className="flex flex-col gap-2">
        {['Sync', 'Alerts', 'Theme'].map((label) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[10px] text-teal-900/60">{label}</span>
            <div className="w-7 h-3.5 bg-teal-700/30 rounded-full relative">
              <div className="absolute top-0.5 left-0.5 w-2.5 h-2.5 bg-white/80 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const tabs = [StatsTab, ActivityTab, StatusTab, SettingsTab]

export default function TabPlaceholder({ tabIndex }) {
  const Tab = tabs[tabIndex]
  return <Tab />
}
