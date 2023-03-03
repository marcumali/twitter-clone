import React from 'react'
import {Button} from 'react-bootstrap'
import Input from '../molecule/input'
import {useForm} from 'react-hook-form'
import Divider from '../molecule/divider'
import SocialAuth from '../molecule/social-auth'

const FormLogin: React.FC<Props> = ({ className, onClickForgotPassword }: Props) => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const actionForm = () => {
		console.log( 'test' );
	}

  return (
    <form onSubmit={handleSubmit(actionForm)} className={className}>
      <div className="fs-20px text-center mb-4">Login to your Account</div>
        <div className="mb-3">
          <Input type="text" placeholder="Username" icon="lucide:user" hasIcon {...register('username', {required: true})}/>
          { errors.username && errors.username.type === 'required' && <div className="text-danger fs-12px">This field is required</div> }
        </div>
        <div className="mb-3">
          <Input type="password" placeholder="Password" icon="lucide:lock" hasIcon {...register('password', {required: true})} />
          { errors.password && errors.password.type === 'required' && <div className="text-danger fs-12px">This field is required</div> }
        </div>
        <Button className="w-100 mb-3" type="submit">Login</Button>
        <Button className="w-100 mb-3" variant="light" onClick={onClickForgotPassword}>Forgot Password</Button>
      <Divider className="mb-3" label="OR" variant="light" />
      <SocialAuth name="Log in" />
    </form>
  )
}

interface Props {
	className?: string
  onClickForgotPassword?: () => void
}

FormLogin.defaultProps = {
	className: '',
}

export default FormLogin
