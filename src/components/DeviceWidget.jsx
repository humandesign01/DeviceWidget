import { useState } from 'react'
import DeviceBody from './DeviceBody'
import DeviceScreen from './DeviceScreen'
import CartridgeSlot from './CartridgeSlot'
import ButtonArea from './ButtonArea'
import SideIndicator from './SideIndicator'

export default function DeviceWidget() {
  const [activeTab, setActiveTab] = useState(0)
  const cycleTab = () => setActiveTab((prev) => (prev + 1) % 4)

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
      <CartridgeSlot />
      <DeviceBody>
        <DeviceScreen activeTab={activeTab} />
        <ButtonArea onCycleTab={cycleTab} />
        <SideIndicator />
      </DeviceBody>
    </div>
  )
}
