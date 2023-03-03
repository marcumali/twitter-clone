import React, {useState} from 'react'
import Form from 'react-bootstrap/Form' 
import {Icon} from '@iconify/react'

const Search: React.FC<Props> = ({ className, value, placeholder, name, type, label, hasIcon, icon }: Props) => {

  const [values, setValues] = useState({
    password: "",
    showPasswordToggle: false,
  });

  const passwordToggle = () => {
    setValues({ ...values, showPasswordToggle: !values.showPasswordToggle });
  };

  return (
    <div className={className}>
      <Form.Group className="position-relative">
        { hasIcon ?
          <Icon icon={`${icon}`} className="fs-16px position-absolute top-0 bottom-0 my-auto ms-3" /> : 
          <Form.Label>{label}</Form.Label>
        }
        <div className="d-flex align-items-center">
          <Form.Control type={ type === "password" && values.showPasswordToggle ? "text" : type } name={name} value={value} placeholder={placeholder} className={ "w-100 rounded-50px " + (hasIcon ? 'ps-6' : '') } />
          { type === "password" && 
            <div className="w-31px ms-2">
              <div className="w-31px h-31px rounded-circle bg-primary d-flex align-items-center justify-content-center cursor-pointer text-white" onClick={passwordToggle}>
                <Icon icon={values.showPasswordToggle ? "lucide:eye" : "lucide:eye-off"} />
              </div>
            </div> 
          }
        </div>
      </Form.Group>
    </div>
  )
}

interface Props {
	className?: string
  hasIcon?: boolean
  value?: string
  placeholder?: string
  name?: string
  icon?: string
  label?: string
  type: string
}

Search.defaultProps = {
	className: '',
}

export default Search
