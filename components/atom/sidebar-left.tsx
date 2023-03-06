import React from 'react'
import Link from 'next/link'
import Logo from '@/components/molecule/logo'
import {Icon} from '@iconify/react'
import { useRouter } from 'next/router'
import DropdownButton from '../molecule/dropdown-button'
import ModalButton from './modal-button'
import Publisher from './publisher'
import { Button } from 'react-bootstrap'
import Avatar from '../molecule/avatar'
import MenuItems from '@/data/static/menuItems.json'
import MenuItemsPublic from '@/data/static/menuItemsPublic.json'

const SidebarLeft: React.FC<Props> = ({ className }: Props) => {

  const router = useRouter()

  const SeamlessBtn = () => {
    return(
      <>
        { router.pathname === '/public' ? '' : 
          <div>
            <Button className="w-100 d-none d-xl-block">Post</Button>
            <div className="w-45px h-45px rounded-circle bg-primary d-flex d-xl-none align-items-center justify-content-center mx-auto">
              <Icon icon="lucide:plus" className="text-white fs-20px" />
            </div>
          </div>
        }
      </>
    )
  }

  return (
    <div className={"w-sm-60px w-xl-200px ms-lg-auto d-none d-sm-flex flex-column " + className}>
      <div className="w-sm-60px w-xl-200px position-relative">
        <div className="w-sm-60px w-xl-200px position-fixed d-flex flex-column h-100 pt-3">
          <Logo src="logo-symbol.png" width={40} link="/" className="mb-3 text-center text-xl-start" />
            { (router.pathname === '/public' || router.pathname === '/public/explore' ) ? 
              <div>
                {MenuItemsPublic?.map(( item:any, index:number ) => (
                  <div key={item.id}> 
                    <Link href={item.link}>
                      <div className="d-flex align-items-center text-base mb-3 justify-content-center justify-content-xl-start">
                        <Icon icon={`${item.icon}`} className="me-xl-3 fs-24px" />
                        <div className="fs-16px d-none d-xl-block">{item.label}</div>
                      </div>
                    </Link> 
                  </div>
                ))}
              </div>
              :
              <div>
                {MenuItems?.map(( item:any, index:number ) => (
                  <div key={item.id}> 
                    <Link href={item.link}>
                      <div className="d-flex align-items-center text-base mb-3 justify-content-center justify-content-xl-start">
                        <Icon icon={`${item.icon}`} className="me-xl-3 fs-24px" />
                        <div className="fs-16px d-none d-xl-block">{item.label}</div>
                      </div>
                    </Link> 
                  </div>
                ))}
              </div>
            }
            <ModalButton modalTitle="Add New Post" btnChildren={<SeamlessBtn />}>
              <Publisher hasPrivacy/>
            </ModalButton>
            { router.pathname === 'public' ? '' : 
              <DropdownButton className="mt-auto" seamless options={[{ id: 0, label: 'Logout' }]}>
                <div className="d-flex align-items-center text-start w-100 py-3">
                  <Avatar sm={30} md={40} src="https://i.pravatar.cc/40/40" className="mx-auto ms-xl-0 me-xl-3" />
                  <div className="text-base lh-sm d-none d-xl-block">
                    <div className="fw-600 clamp clamp-1">Marc Umali</div>
                    <div className="clamp clamp-1">@marcumali</div>
                  </div>
                  <div className="ms-auto">
                    <Icon icon="mdi:ellipsis-horizontal" className="fs-20px text-gray-3 d-none d-xl-block" />
                  </div>
                </div>
              </DropdownButton>
            }
        </div>
      </div>
    </div>
  )
}

interface Props {
	className?: string
}

SidebarLeft.defaultProps = {
	className: '',
}

export default SidebarLeft
