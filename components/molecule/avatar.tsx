import React from 'react'

const Avatar: React.FC<Props> = ({ className, src, sm, md, lg }: Props) => {
  return (
    <div className={className}>
      <div className="bg-center bg-cover bg-gray-1 rounded-circle bg-dark" d-sm={sm} d-md={md} d-lg={lg} style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  )
}

interface Props {
	className?: string
  src?: any
  dimension?: number
  sm?: number
  md?: number
  lg?: number
}

Avatar.defaultProps = {
	className: '',
  src: 'https://ui-avatars.com/api/?name=H&background=ff7f42&color=fff',
  sm: 30
}

export default Avatar
