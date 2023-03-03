import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ModalButton from './modal-button'
import Agreement from '../molecule/agreement'
import Logo from '../molecule/logo'
import SocialAuth from '../molecule/social-auth'
import Divider from '../molecule/divider'
import FormResetPassword from './form-reset-password'
import FormLogin from './form-login'
import FormCreateAccount from './form-create-account'

const ToastFluid: React.FC<Props> = ({ className }: Props) => {

  const [showResetPassword, setResetPassword] = useState(false)
	const [showCreateAccount, setCreateAccount] = useState(false)

  const SignupBtn = () => {
    return <Button variant="white">Sign Up</Button>
  }

  const LoginBtn = () => {
    return <Button variant="outline-white me-3">Log in</Button>
  }

  return (
    <div className={ "position-fixed start-0 w-100 " + className }>
      <Container className="py-3">
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="d-flex align-items-center justify-content-between text-white">
              <div>
                <div className="fs-20px fw-600">Don't miss what's happening</div>
                <div>People on Holla are the first to know.</div>
              </div>
              <div className="d-flex align-items-center">
                <ModalButton btnChildren={<LoginBtn />}>
                  <div className="px-10 pt-5 pb-10">
                    <Logo src="logo.png" width={150} link="/" imgClassName="mx-auto d-block mb-3" />
                    { showResetPassword ? 
                      <FormResetPassword onClickLogin={()=>setResetPassword(false)} /> : 
                      <FormLogin onClickForgotPassword={()=>setResetPassword(true)}/>
                    }
                  </div>
                </ModalButton>
                <ModalButton btnChildren={<SignupBtn />}>
                  <div className="px-10 pt-5 pb-10">
                    <Logo src="logo.png" width={150} link="/" imgClassName="mx-auto d-block mb-3" />
                    { showCreateAccount ? <FormCreateAccount onClickBack={()=>setCreateAccount(false)} onClickCreaAccount={()=>setCreateAccount(false)}/> : 
                      <div>
                        <div className="fs-20px text-center mb-4">Join Holla today</div>
                        <SocialAuth name="Sign up">
                          <Divider variant="light" label="OR" className="mb-3" />
                          <Button variant="dark" className="w-100 mb-3" onClick={()=>setCreateAccount(true)}>Create Account</Button>
                          <Agreement />
                        </SocialAuth>
                      </div>
                    }
                  </div>
                </ModalButton> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

interface Props {
	className?: string
}

ToastFluid.defaultProps = {
	className: '',
}

export default ToastFluid
