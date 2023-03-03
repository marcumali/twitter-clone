
import { Col, Row} from 'react-bootstrap'
import SidebarRight from './sidebar-right'
import SidebarLeft from './sidebar-left'

const LayoutMain: React.FC<Props> = ({children}: Props) => {

	return (
			<div className="h-100 mx-auto px-5 maxw-1100px">
				<div className="h-100 d-flex">
					<SidebarLeft />
					<div className="w-100p mx-3">
						<div className="h-100 border-x-gray-1">
							{children}
						</div>
					</div>
					<div className="d-none d-lg-block w-320px me-lg-auto">
						<SidebarRight className="w-320px" />
					</div>
				</div>
			</div>
	)
}

interface Props {
	children: React.ReactNode
}

export default LayoutMain
