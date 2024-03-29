import {useState} from 'react'
import SocialAuth from '@/components/molecule/social-auth'
import FooterLinks from '@/components/molecule/footer-links'
import Button from 'react-bootstrap/Button'
import Agreement from '../molecule/agreement'
import { useRouter } from 'next/router'
import Trending from '../molecule/trending'
import Input from '@/components/molecule/input'
import WhoToFollow from './who-to-follow'
import SearchResult from './search-result'
import trendList from '@/data/static/trendList.json'

const SidebarRight: React.FC<Props> = ({ className }: Props) => {
  const router = useRouter()
  const [show, setShow] = useState(false)

  return (
    <div className={"w-320px mt-3 position-sticky top-13px " +  className}>
      { (router.pathname === '/public' || router.pathname === '/public/explore' ) ? 
        <div className="border-1-solid-gray-1 p-3 rounded-8px">
          <div className="fw-700 fs-20px">New to Holla?</div>
          <div className="text-gray-2">Sign up now to get your own personalized timeline!</div>
          <SocialAuth className="mt-3" name="Sign up">
            <Button variant="outline-light w-100 mb-3">Create Account</Button>
          </SocialAuth>
          <Agreement />
        </div>
        :
        <div>
          <div className="position-relative" onClick={() => { setShow(true)} }>
            <Input type="text" placeholder="Search Holla" className="mb-3" icon="lucide:search" hasIcon/>
            <SearchResult show={show} onClickOutside={() => {setShow(false)}} />
          </div>
          { router.pathname === '/explore' ? '' : 
            <div className="bg-gray-1 p-3 rounded-10px mb-3">
              <Trending trendOptions={trendList} showMoreLink="#" />
            </div>
          }
          <WhoToFollow title={ router.pathname === '/profile' ? 'You might like' : 'Who to follow' } showMoreLink="#" />
        </div>
      }
      <FooterLinks className="mt-3"/>
    </div>
  )
}

interface Props {
	className?: string
  outsideClick?: any
}

SidebarRight.defaultProps = {
	className: '',
}

export default SidebarRight
