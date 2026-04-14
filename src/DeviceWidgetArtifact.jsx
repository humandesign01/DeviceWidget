import { useState } from "react";

/*
 * Dashboard Gadget Widget — Single-file artifact version
 *
 * Usage: Ask Claude to create a React artifact and paste this code,
 * or reference this file in your Claude project context.
 *
 * Click the yellow d-pad button to cycle through 4 tabs.
 */

// -- Color palette --
const C = {
  body: "#1a8a8a",
  bodyDark: "#147070",
  bezel: "#1a1a2e",
  screenFrom: "#c8f0f0",
  screenTo: "#80d8d8",
  cartridge: "#e87830",
  label: "#607080",
  pin: "#d4a843",
  button: "#f0a030",
  buttonHover: "#e89020",
};

// -- Tab content components --

function StatsTab() {
  const bars = [60, 85, 45, 70, 90];
  return (
    <div className="h-full flex flex-col">
      <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(19,78,74,0.7)" }}>
        Stats
      </p>
      <div className="flex-1 flex items-end gap-1.5 pb-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, background: "rgba(15,118,110,0.4)" }}
          />
        ))}
      </div>
    </div>
  );
}

function ActivityTab() {
  return (
    <div className="h-full flex flex-col">
      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(19,78,74,0.7)" }}>
        Activity
      </p>
      <div className="flex flex-col gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "rgba(15,118,110,0.3)" }} />
            <div
              className="h-2 rounded-full"
              style={{ width: `${70 - i * 12}%`, background: "rgba(15,118,110,0.2)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusTab() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-2">
      <div
        className="w-4 h-4 rounded-full animate-pulse"
        style={{ background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.6)" }}
      />
      <p className="text-[11px] font-bold" style={{ color: "rgba(19,78,74,0.7)" }}>
        All Systems Active
      </p>
      <p className="text-[9px]" style={{ color: "rgba(19,78,74,0.5)" }}>
        12 nodes connected
      </p>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="h-full flex flex-col">
      <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(19,78,74,0.7)" }}>
        Settings
      </p>
      <div className="flex flex-col gap-2">
        {["Sync", "Alerts", "Theme"].map((label) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[10px]" style={{ color: "rgba(19,78,74,0.6)" }}>
              {label}
            </span>
            <div className="w-7 h-3.5 rounded-full relative" style={{ background: "rgba(15,118,110,0.3)" }}>
              <div className="absolute top-0.5 left-0.5 w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.8)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const tabs = [StatsTab, ActivityTab, StatusTab, SettingsTab];

// -- Device sub-components --

function CartridgeSlot() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 rounded-t-xl flex flex-col items-center justify-between py-2 px-3 shadow-lg"
      style={{ width: "38%", height: 56, top: -32, background: C.cartridge, zIndex: 1 }}
    >
      <div className="rounded-sm" style={{ width: "80%", height: 20, background: C.label, opacity: 0.8 }} />
      <div className="flex gap-1">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-b-sm" style={{ width: 6, height: 8, background: C.pin }} />
        ))}
      </div>
    </div>
  );
}

function DeviceScreen({ activeTab }) {
  const Tab = tabs[activeTab];
  return (
    <div
      className="absolute top-[16%] left-1/2 -translate-x-1/2 rounded-2xl p-2"
      style={{
        width: "62%",
        height: "42%",
        background: C.bezel,
        boxShadow: "inset 0 2px 8px rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="w-full h-full rounded-xl overflow-hidden relative"
        style={{ background: `linear-gradient(to bottom, ${C.screenFrom}, ${C.screenTo})` }}
      >
        <div key={activeTab} className="w-full h-full p-3 animate-[fadeIn_0.25s_ease-out]">
          <Tab />
        </div>
      </div>
      <div className="flex gap-1.5 justify-center mt-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
            style={{ background: i === activeTab ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)" }}
          />
        ))}
      </div>
    </div>
  );
}

function ButtonArea({ onCycleTab }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2">
      <div className="w-20 h-12 mx-auto" style={{ background: C.cartridge, clipPath: "polygon(10% 0%, 90% 0%, 50% 100%)" }} />
      <button
        onClick={onCycleTab}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full cursor-pointer shadow-lg transition-all duration-150 active:scale-95 flex items-center justify-center"
        style={{ background: hover ? C.buttonHover : C.button, zIndex: 10 }}
      >
        <div className="relative w-full h-full pointer-events-none select-none">
          <svg className="absolute top-1 left-1/2 -translate-x-1/2" width="8" height="6" viewBox="0 0 8 6">
            <polygon points="4,0 8,6 0,6" fill="currentColor" opacity="0.5" />
          </svg>
          <svg className="absolute bottom-1 left-1/2 -translate-x-1/2" width="8" height="6" viewBox="0 0 8 6">
            <polygon points="4,6 0,0 8,0" fill="currentColor" opacity="0.5" />
          </svg>
          <svg className="absolute left-1 top-1/2 -translate-y-1/2" width="6" height="8" viewBox="0 0 6 8">
            <polygon points="0,4 6,0 6,8" fill="currentColor" opacity="0.5" />
          </svg>
          <svg className="absolute right-1 top-1/2 -translate-y-1/2" width="6" height="8" viewBox="0 0 6 8">
            <polygon points="6,4 0,0 0,8" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function SideIndicator() {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-md"
      style={{ right: -6, background: C.button }}
    />
  );
}

// -- Main widget --

export default function DeviceWidget() {
  const [activeTab, setActiveTab] = useState(0);
  const cycleTab = () => setActiveTab((prev) => (prev + 1) % 4);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="relative" style={{ width: 320, height: 320 }}>
        {/* Cartridge sits behind the body circle (z-index 1) */}
        <CartridgeSlot />
        {/* Body circle overlaps cartridge bottom (z-index 2) */}
        <div
          className="w-full h-full rounded-full shadow-2xl relative overflow-visible"
          style={{
            background: C.body,
            boxShadow: `0 0 0 4px ${C.bodyDark}4D, 0 25px 50px -12px rgba(0,0,0,0.25)`,
            zIndex: 2,
          }}
        >
          <DeviceScreen activeTab={activeTab} />
          <ButtonArea onCycleTab={cycleTab} />
          <SideIndicator />
        </div>
      </div>
    </div>
  );
}
