import React, {useState} from 'react'
import {Icon} from '@iconify/react'

const PostLike: React.FC<Props> = ({ className, colorClassName }: Props) => {

  const [activeColor, SetActiveColor] = useState(false)

  return(
    <div className={ className + " d-flex align-items-center cursor-pointer cursor-pointer " + (  activeColor ? colorClassName :'text-gray-3' ) } onClick={()=>SetActiveColor(!activeColor)}>
      <Icon icon={activeColor ? 'mdi:cards-heart' : 'lucide:heart'} className="fs-18px me-2" />
      <div>{activeColor ? (1467+1) : 1467}</div>
    </div>
  )
}

interface Props {
  className?: string
  colorClassName?: string
}

PostLike.defaultProps = {
  className: '',
  colorClassName: 'text-danger'
}

export default PostLike