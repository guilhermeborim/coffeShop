import Bag from '@/../public/Bag.png'
import Heart from '@/../public/Heart.png'
import Home from '@/../public/Home.png'
import Notification from '@/../public/Notification.png'
import IconFooterComponent from './IconFooter'
export default function FooterComponent() {
  return (
    <footer className="bg-white px-7 py-6 fixed bottom-0 w-full rounded-t-3xl flex items-center justify-between">
      <IconFooterComponent icon={Home} />
      <IconFooterComponent icon={Heart} />
      <IconFooterComponent icon={Bag} />
      <IconFooterComponent icon={Notification} />
    </footer>
  )
}
