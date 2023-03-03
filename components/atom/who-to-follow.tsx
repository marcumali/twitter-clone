
import React, {useState} from 'react'
import { Container, Col, Row, Button} from 'react-bootstrap'
import Avatar from '../molecule/avatar'
import Link from 'next/link'

const WhoToFollow: React.FC<Props> = ({ className, title, showMoreLink }: Props) => {

	const list = [
		{
			"id": 0,
			"name": 'Marc Umali',
			"username": 'marcumali',
			"avatar": 'https://i.pravatar.cc/41/41',
			"link": '#',
		},
		{
			"id": 1,
			"name": 'Devin Stewart',
			"username": 'devinstewart',
			"avatar": 'https://i.pravatar.cc/42/42',
			"link": '#',
		},
		{
			"id": 2,
			"name": 'Darwin Pineda',
			"username": 'darwinpineda',
			"avatar": 'https://i.pravatar.cc/43/43',
			"link": '#',
		},
	];

	return (
		<div className={"bg-gray-1 p-3 rounded-10px " + className}>
			<div className="fw-600 mb-3 fs-18px">{title}</div>
			{list?.map((item:any, index:number, list) => (
				<div className={"d-flex align-items-center justify-content-between " + (index + 1 === list.length ? 'mb-0' : 'mb-3' ) } key={item.id}>
					<div className="d-flex align-items-center lh-sm">
						<Link href={item.link}>
							<Avatar sm={30} md={40} src={item.avatar}  className="me-2" />
						</Link>
						<Link href={item.link}>
							<div className="pe-3">
								<div className="fw-600 text-base clamp clamp-1">{item.name}</div>
								<div className="text-gray-3 clamp clamp-1">@{item.username}</div>
							</div>
						</Link>
					</div>
					<div><Button variant="dark">Follow</Button></div>
				</div>
			))}
			<Link href={showMoreLink}>
				<div className="mt-3">Show More</div>
			</Link>
		</div>
	)
}

interface Props {
	className?: string
	title?: string
	showMoreLink?: any
}

WhoToFollow.defaultProps = {
	className: '',
	showMoreLink: '#'
}

export default WhoToFollow