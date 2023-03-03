const MobileMenu: React.FC<Props> = ({ className }:Props) => {
  return (
    <div className={className}>
      
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