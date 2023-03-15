import {Icon} from '@iconify/react'
import Link from 'next/link'
import ModalButton from '../atom/modal-button'
import Publisher from '../atom/publisher'
import { useRouter } from 'next/router'

const MobileMenu: React.FC<Props> = ({ className }:Props) => {

  const SeamlessBtn = () => {
    return(
      <div className="w-45px h-45px rounded-circle bg-primary d-flex align-items-center justify-content-center">
        <Icon icon="lucide:plus" className="text-white fs-20px" />
      </div>
    )
  }

  const router = useRouter()

  const isActive = (path:string) => {
    return router.pathname === path ? 'text-primary' : 'text-base';
  }
  
const menuItems = [
  {
    label: 'Home',
    icon: 'lucide:home',
    link: '/'
  },
  {
    label: 'Search',
    icon: 'lucide:search',
    link: '/search'
  },
  {
    label: 'Notification',
    icon: 'lucide:bell',
    link: '/notifications',
    hasNew: true,
  },
  {
    label: 'Messages',
    icon: 'lucide:mail',
    link: '/messages',
    hasNew: true,
  },
  {
    label: 'Profile',
    icon: 'lucide:user',
    link: '/profile'
  },
]

  return (
    <div className={ "d-flex justify-content-around d-sm-none position-fixed bottom-0 bg-white p-3 z-index-1010 box-shadow-1 start-0 end-0 "+ className }>
      { router.pathname === '/' && 
        <div className="position-absolute top-0 end-0 mt-n60px me-3 bg-primary rounded-circle w-45px h-45px d-flex d-sm-none align-items-center justify-content-center">
          <ModalButton modalTitle="Add New Post" btnChildren={<SeamlessBtn />}>
            <Publisher hasPrivacy/>
          </ModalButton>
        </div>
      }
      { menuItems.map((item) => (
        <Link href={item.link} key={item.label}>
          <div className="position-relative">
            { item.hasNew && <div className="position-absolute top-0 end-0 w-10px h-10px rounded-circle bg-danger"></div> }
            <Icon icon={item.icon} className={ "fs-22px " + isActive( `${item.link}` )} />
          </div>
        </Link>
      ))}
    </div>
  )
}

interface Props {
  className?: string
}

MobileMenu.defaultProps = {
  className: ''
}

export default MobileMenu