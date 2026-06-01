import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavLink = ({ children, href }) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={`nav-link ${isActive ? 'border-b-2 border-gray-500' : ''}`}>
      {children}
    </Link>
  )
}

export default NavLink