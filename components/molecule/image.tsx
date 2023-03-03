import React from 'react'
import { Image as BsImage } from 'react-bootstrap'

const Image: React.FC<Props> = ({ className, src, fluid, onClick, imgClassName, alt }: Props) => {

  return (
    <div className={"rounded-10px overflow-hidden cursor-pointer " + className} onClick={onClick}>
      <BsImage alt={alt} src={src} fluid={ fluid ? true : false } className={imgClassName}/>
    </div>
  )
}

interface Props {
	className?: string
  imgClassName?: string
  src?: string
  fluid?: boolean
  onClick?: ()=> void
  alt: string
}

Image.defaultProps = {
	className: '',
  imgClassName: '',
  src: 'https://picsum.photos/1920/1080',  
}

export default Image
