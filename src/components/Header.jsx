import React from 'react'

function Header() {
  return (
    <div>{import.meta.env.VITE_API_API_URL}</div>
  )
}

export default Header