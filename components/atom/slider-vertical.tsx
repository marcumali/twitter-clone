import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import Button from 'react-bootstrap/Button'

const SliderVertical: React.FC<Props> = ({ className, contentList, onClick, btnLabel }: Props) => {

  return (
    <>
      <div className="fs-20px fw-800 mb-3">{ btnLabel === 'Who I Am?' ? 'What I can do?' : 'Who I Am?' }</div>
      <div className={ "px-5 position-relative h-200px " + className}>
        <div className="position-absolute top-0 start-0 w-100 h-30px z-index-1010 gradient-v-black-transparent"></div>
        <div className="position-absolute bottom-0 start-0 w-100 h-50px z-index-1010 gradient-v-transparent-black"></div>
        <Swiper
          slidesPerView={1.7}
          direction={"vertical"}
          modules={[Pagination]}
          className="h-100 cursor-grab"
          >
          { contentList && contentList?.map( (item: any, index: number) => (
            <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
          ))}
        </Swiper>
        <Button onClick={onClick} variant="outline-light mt-2">{btnLabel}</Button>
      </div>
    </>
  )
}

interface Props {
	className?: string
  contentList: Array<{id: number, content: string}>
  onClick?: () => void
  btnLabel?: string
}

SliderVertical.defaultProps = {
	className: '',
  btnLabel: '',
}

export default SliderVertical
