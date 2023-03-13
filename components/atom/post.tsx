
import React from 'react'
import Avatar from '../molecule/avatar'
import {Icon} from '@iconify/react'
import Link from 'next/link'
import DropdownButton from '../molecule/dropdown-button'
import Image from '../molecule/image'
import ModalButton from './modal-button'
import Publisher from './publisher'
import PostLike from '../molecule/post-like'

const Post: React.FC<Props> = ({ className, postList, onClick }: Props) => {

	const DropdownList = [
		{
			id: 0,
			label: 'Embed this post',
			link: '#',
		}
	]

	const ShareOptions = [
		{
			id: 0,
			label: "Share"
		},
		{
			id: 1,
			label: "Quote Share"
		}
	]

	const CommentButton = () => {
    return <div className="d-flex align-items-center text-gray-3">
			<Icon icon="lucide:message-circle" className="fs-20px me-2" />
			<div>11.9K</div>
		</div>
  }

	return (
		<div className={className}>
			{ postList && postList.map( (item:any, index:number ) => (
				<div className="d-flex border-bottom-1-solid-gray-1 p-3" key={item.id}>
					<Link href={item.link}>
						<Avatar sm={30} md={40} className="me-3" src={item.avatar}/>
					</Link>
					<div className="w-100">
						<div className="d-flex align-items-center justify-content-between w-100 mb-2">
							<div className="d-flex align-items-center">
								<Link href={item.link}>
									<div className="d-flex">
										<div className="fw-600 me-2 text-base">{item.name}</div>
										<div className="text-gray-3">{item.username}</div>
									</div>
								</Link>
								<Icon icon="mdi:dot" />
								<div className="text-gray-3">{item.status}</div>
							</div>
							<DropdownButton options={DropdownList} seamless>
								<Icon icon="mdi:ellipsis-horizontal" className="fs-22px text-gray-3" />
							</DropdownButton>
						</div>
						<div>{item.text}</div>
						{ item.img ? <Image alt="[id]" src={item.img} onClick={onClick} imgClassName="w-100" className="mt-2" fluid/> : '' }
						<div className="d-flex align-items-center justify-content-around mt-3">
							<ModalButton modalTitle="Write your Reply" btnChildren={<CommentButton />}> 
								<div className="d-flex px-3">
									<Link href={item.link}>
										<Avatar sm={30} md={40} className="me-3" src={item.avatar} />
									</Link>
									<div>
										<div className="d-flex align-items-center">
											<Link href={item.link}>
												<div className="d-flex">
													<div className="fw-600 me-2 text-base">{item.name}</div>
													<div className="text-gray-3">{item.username}</div>
												</div>
											</Link>
											<Icon icon="mdi:dot" />
											<div className="text-gray-3">{item.status}</div>
										</div>
										<div>{item.text}</div>
										<div className="d-flex align-items-center mt-2">
											<div className="text-gray-3 me-1">Replying to</div>
											<Link href="#">{item.username}</Link>
										</div>
									</div>
								</div>
								<Publisher btnLabel="Reply" />
							</ModalButton>
							<DropdownButton options={ShareOptions}seamless>
								<Icon icon="lucide:share-2" className="text-gray-3 fs-16px me-2" />
								<div className="text-gray-3">456</div>
							</DropdownButton>
							<PostLike />
						</div>
					</div>
				</div>
			))}
			<div className="h-45px"></div>
		</div>
	)
}

interface Props {
	className?: string
	postList: Array<{
		id: number
		name: string
		avatar: string
		username: string
		status: string
		text: string
		img: string
		link: string
	}>,
	onClick: () => void
}

Post.defaultProps = {
	className: '',
}

export default Post
