import React from 'react'

const Divider: React.FC<Props> = ({ className, label, variant }: Props) => {
  return (
    <div className={ "d-flex align-items-center " + className}>
      <div className={ "h-2px w-100 bg-" + `${variant}` }></div>
      <div className="px-3">{label}</div>
      <div className={ "h-2px w-100 bg-" + `${variant}` }></div>
    </div>
  )
}

interface Props {
	className?: string
  label?: string
  variant?: string
}

Divider.defaultProps = {
	className: '',
  variant: 'primary',
}

export default Divider
