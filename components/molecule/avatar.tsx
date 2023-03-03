import React from 'react'

const Avatar: React.FC<Props> = ({ className, src, width, height }: Props) => {
  return (
    <div className={className}>
      <div className="bg-center bg-cover bg-gray-1 rounded-circle bg-dark" data-width={width} data-height={height} style={{ backgroundImage: `url(${src})` }}></div>
    </div>
  )
}

interface Props {
	className?: string
  src?: any
  width?: number
  height?: number
}

Avatar.defaultProps = {
	className: '',
  src: 'https://ui-avatars.com/api/?name=H&background=ff7f42&color=fff',
  height: 40,
  width: 40
}

export default Avatar
