import React from 'react'
import Link from 'next/link'

const FooterLinks: React.FC<Props> = ({ className }: Props) => {

  const footerLinkList = [
    {
      id: 0,
      label: 'Terms of Use',
      src: '#',
    },
    {
      id: 1,
      label: 'Privacy policy',
      src: '#',
    },
    {
      id: 2,
      label: 'Cookies',
      src: '#',
    },
  ]

  return (
    <div className={"d-flex flex-wrap " + className}>
      { footerLinkList.map( item => (
        <Link href={item.src} key={item.id}>
          <div className="text-gray-2 me-3">{item.label}</div>
        </Link>
      ))}
      <div>© Holla - {new Date().getFullYear()}</div>
    </div>
  )
}

interface Props {
	className?: string
}

FooterLinks.defaultProps = {
	className: '',
}

export default FooterLinks
