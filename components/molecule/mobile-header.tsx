import Avatar from '@/components/molecule/avatar'
import Logo from './logo'
import { useRouter } from 'next/router'
import Input from './input'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from 'next/link'

const MobileHeader: React.FC<Props> = ({ className, searchOnClick }:Props) => {

  const router = useRouter()

  return (
    <div className="d-sm-none position-relative z-index-1020">
      { router.pathname === '/messages' ? '' : <div className="h-56px"></div> }
      <div className={"d-flex justify-content-between align-items-center bg-white p-3 box-shadow-1 position-fixed w-100 top-0 z-index-1010 " + className}>
        <Logo src="logo.png" width={55} />
        { router.pathname === '/search' && 
          <div className="w-100p mx-5">
            <div className="d-flex align-items-center cursor-pointer" onClick={searchOnClick}>
               <Input type="text" placeholder="Search" icon="lucide:search" hasIcon/>
            </div>
          </div>
        }
        <Dropdown>
          <Dropdown.Toggle className="btn-seamless">
            <Avatar sm={30} md={40} src="https://i.pravatar.cc/40/40" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="w-300px p-3">
              <Avatar sm={80} className="d-flex justify-content-center mb-3" />
              <div className="text-center">
                <div className="fw-600 fs-18px">Marc Umali</div>
                <div className="text-gray-3">@marcumali</div>
              </div>
              <div className="d-flex align-items-center mt-3 justify-content-center">
                <Link href="#">
                  <div className="d-flex align-items-center text-base me-5">
                    <div className="fw-600 me-2">16</div>
                    <div>Following</div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="d-flex align-items-center text-base">
                    <div className="fw-600 me-2">3.8M</div>
                    <div>Followers</div>
                  </div>
                </Link>
              </div>
            </div>
            <Dropdown.Divider />
            <Dropdown.Item className="text-base text-center">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
    </div>
  )
}

interface Props {
  className?: string
  searchOnClick?: () => void
}

MobileHeader.defaultProps = {
  className: ''
}

export default MobileHeader