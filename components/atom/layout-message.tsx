
import SidebarLeft from './sidebar-left'
import MobileHeader from '../molecule/mobile-header'
import MobileMenu from '../molecule/mobile-menu'

const LayoutMessage: React.FC<Props> = ({children}: Props) => {

	return (
		<div className="h-100 mx-auto px-md-5 maxw-1100px">
			<MobileHeader />
			<MobileMenu />
			<div className="d-flex h-100">
				<SidebarLeft />
				<div className="w-100p mx-md-3">
					<div className="h-100 border-x-gray-1">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

interface Props {
	children: React.ReactNode
}

export default LayoutMessage
