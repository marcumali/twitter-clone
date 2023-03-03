import React from 'react'
import Button from 'react-bootstrap/Button'
import {Icon} from '@iconify/react'

const SocialAuth: React.FC<Props> = ({ className, onClick, children, name }: Props) => {

  const socialAuthList = [
    {
      id: 0,
      label: 'Google',
      icon: 'logos:google-icon',
      size: 16,
    },
    {
      id: 1,
      label: 'Apple',
      icon: 'mdi:apple',
      size: 22,
    },
  ]

  return (
    <div className={className}>
      { socialAuthList.map( item => (
        <Button variant="outline-light" className="w-100 mb-2" key={item.id} onClick={onClick}>
          <Icon icon={item.icon} className={"me-2 fs-" + `${item.size}` + "px" } />
          <div>{name} with {item.label}</div>
        </Button>
      ))}
      {children}
    </div>
  )
}

interface Props {
	className?: string
  name?: string
  onClick?: () => void
  children?: React.ReactNode
}

SocialAuth.defaultProps = {
	className: '',
}

export default SocialAuth
