import Avatar from '@/components/molecule/avatar'
import Logo from './logo'

const MobileHeader: React.FC<Props> = ({ className }:Props) => {
  return (
    <div className="d-sm-none">
      <div className="h-56px"></div>
      <div className={"d-flex justify-content-between align-items-center bg-white p-3 box-shadow-1 position-fixed w-100 top-0 z-index-1010 " + className}>
        <Logo src="logo.png" width={55} />
        <Avatar sm={30} md={40} src="https://i.pravatar.cc/40/40" />
      </div>
    </div>
  )
}

interface Props {
  className?: string
}

MobileHeader.defaultProps = {
  className: ''
}

export default MobileHeader