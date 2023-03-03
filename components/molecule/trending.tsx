import React from 'react'
import Link from 'next/link'
import DropdownButton from './dropdown-button'
import {Icon} from '@iconify/react'

const DropdownList = [
  {
    id: 0,
    label: 'Not interested in this',
    link: '#',
  },
  {
    id: 1,
    label: 'This trend is harmful and spammy',
    link: '#',
  },
];

const Trending: React.FC<Props> = ({ className, link, trendOptions, showMoreLink }: Props) => {
  return (
    <div className={"border-bottom-1-solid-gray-1 "+ className}>
      <div className="fw-600 mb-3 fs-18px">Trending for you</div>
      { trendOptions?.map( item => (
        <div className="d-flex align-items-center justify-content-between mb-3" key={item.id}>
          <div>
            <div className="text-gray-3">{item.label}</div>
            <Link href={link}>
              <div className="fw-600 fs-14px text-base">{item.trendName}</div>
            </Link>
            <div className="text-gray-3">{item.shares} Shares</div>
          </div>
          <DropdownButton options={DropdownList} seamless>
            <Icon icon="mdi:ellipsis-horizontal" className="fs-22px text-gray-3" />
          </DropdownButton>
        </div>
      ))}
      <Link href={showMoreLink}>Show more</Link>
    </div>
  )
}

interface Props {
	className?: string
  link?: any
  trendOptions: Array<{
    id: number, 
    label: string, 
    trendName: any, 
    shares: number
    link: any,
  }>,
  showMoreLink?: any
}

Trending.defaultProps = {
	className: '',
  link: '#',
  showMoreLink: '#',
}

export default Trending
