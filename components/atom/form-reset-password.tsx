import React from 'react'
import { Button } from 'react-bootstrap'
import Input from '../molecule/input'
import {useForm} from 'react-hook-form'

const FormResetPassword: React.FC<Props> = ({ className, onClickLogin }: Props) => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const actionForm = () => {
		console.log( 'test' );
	}

  return (
    <form onSubmit={handleSubmit(actionForm)} className={className}>
      <div className="fs-20px text-center mb-4">Reset your password</div>
      <div className="mb-3">
        <Input type="text" placeholder="Email" icon="lucide:user" hasIcon {...register('email', {required: true})}/>
        { errors.email && errors.email.type === 'required' && <div className="text-danger fs-12px">This field is required</div> }
      </div>
      <Button className="w-100 mb-3" type="submit">Reset Password</Button>
      <Button className="w-100 mb-3" variant="light" onClick={onClickLogin}>Login</Button>
    </form>
  )
}

interface Props {
	className?: string
  onClickLogin?: () => void
}

FormResetPassword.defaultProps = {
	className: '',
}

export default FormResetPassword
