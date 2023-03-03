import React from 'react'
import Link from 'next/link'

const Agreement: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={"text-gray-2 " + className}>By signing up, you agree to the <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>, including <Link href="#">Cookie Use</Link>.</div>
  )
}

interface Props {
	className?: string
}

Agreement.defaultProps = {
	className: '',
}

export default Agreement
