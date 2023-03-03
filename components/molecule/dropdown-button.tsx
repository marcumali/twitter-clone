import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownButton: React.FC<Props> = ({ className, seamless, options, menuClassName, children }: Props) => {
  return (
    <Dropdown className={className}>
      <Dropdown.Toggle className={ seamless ? 'btn-seamless' : '' }>
        { children }
      </Dropdown.Toggle>
      <Dropdown.Menu className={ "p-3 " + menuClassName}>
        { options.map((item: any, index: number, options:any ) => (
          <div key={item.id}>
            <Dropdown.Item href={item.link} className={"px-0 d-flex align-items-center text-base " + ( index + 1 === options.length ? '' : 'mb-2' ) }>
              <div>{item.label}</div>
            </Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

interface Props {
	className?: string
  menuClassName?: string
  seamless?: boolean
  options: Array<{ 
    id: number
    label:string
    link?: any
   }>,
  children?: React.ReactNode
}

DropdownButton.defaultProps = {
	className: '',
  menuClassName: ''
}

export default DropdownButton
