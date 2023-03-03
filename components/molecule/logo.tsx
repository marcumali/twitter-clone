import React from 'react'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import getConfig from 'next/config'

const Logo: React.FC<Props> = ({ className, link, src, width, imgClassName }: Props) => {

  const { publicRuntimeConfig } = getConfig()

  return (
    <div className={className}>
      <Link href={link}>
        <Image src={src} className={ "w-" + `${width}` + "px " + `${imgClassName}` } alt={publicRuntimeConfig.APP_NAME} />
      </Link>
    </div>
  )
}

interface Props {
	className?: string
  imgClassName?: string
  link?: any
  width?: number
  src?: any
}

Logo.defaultProps = {
	className: '',
  imgClassName: '',
  link: '#',
  width: 70,
  src: 'logo.png'
}

export default Logo
