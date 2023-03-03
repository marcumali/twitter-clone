import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import Input from '../molecule/input'
import {useForm} from 'react-hook-form'
import { Icon } from '@iconify/react'

const FormCreateAccount: React.FC<Props> = ({ className, onClickCreaAccount, onClickBack }: Props) => {

  const [ showRegisterSuccess, setRegisterSuccess ] = useState(false)
  const { register, handleSubmit, formState:{errors} } = useForm()
  const actionForm = () => {
		console.log( 'test' );
	}

  return (
    <div className={className}>
      { showRegisterSuccess ?
        <div className="text-center">
          <div className="fs-20px">Account created successfully!</div>
          <div>Please check your email and verify your account.</div>
          <Icon icon="material-symbols:check-circle-rounded" className="fs-80px text-success mt-5" />
        </div> :
        <form onSubmit={handleSubmit(actionForm)}>
          <div className="fs-20px text-center mb-4">Create your Account</div>
            <div className="mb-3">
              <Input type="text" placeholder="Name" icon="lucide:user" hasIcon {...register('name', {required: true})}/>
              { errors.name && errors.name.type === 'required' && <div className="text-danger fs-12px">This field is required</div> }
            </div>
            <div className="mb-3">
              <Input type="email" placeholder="Email" icon="lucide:mail" hasIcon {...register('email', {required: true})} />
              { errors.email && errors.email.type === 'required' && <div className="text-danger fs-12px">This field is required</div> }
            </div>
            <div className="d-flex align-items-center">
              <Icon icon="material-symbols:arrow-back-rounded" className="fs-20px cursor-pointer me-2" onClick={onClickBack}/>
              <Button className="w-100" type="submit" onClick={()=>setRegisterSuccess(true)}>Create Account</Button>
            </div>
        </form>
      }
    </div>
  )
}

interface Props {
	className?: string
  onClickCreaAccount?: () => void
  onClickBack?: () => void
}

FormCreateAccount.defaultProps = {
	className: '',
}

export default FormCreateAccount
