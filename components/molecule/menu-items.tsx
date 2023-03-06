import React from 'react'

const MenuItems: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      
    </div>
  )
}

interface Props {
	className?: string
}

MenuItems.defaultProps = {
	className: '',
}

export default MenuItems
