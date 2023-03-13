import Avatar from '@/components/molecule/avatar'
import Logo from './logo'
import { useRouter } from 'next/router'
import Input from './input'

const MobileHeader: React.FC<Props> = ({ className, searchOnClick }:Props) => {

  const router = useRouter()

  return (
    <div className="d-sm-none">
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
        <Avatar sm={30} md={40} src="https://i.pravatar.cc/40/40" />
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