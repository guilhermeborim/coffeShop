import Bag from '@/../public/Bag.png'
import Heart from '@/../public/Heart.png'
import Home from '@/../public/Home.png'
import Notification from '@/../public/Notification.png'
import Image from 'next/image'

export const FooterIcon = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src={Home} alt="icon footer" width={24} height={24} />
      <Image src={Heart} alt="icon footer" width={24} height={24} />
      <Image src={Bag} alt="icon footer" width={24} height={24} />
      <Image src={Notification} alt="icon footer" width={24} height={24} />
    </div>
  )
}
