import NavbarHeader from '../NavbarHeader'
import React from 'react'

function PageWidthNavbar(props) {
  return (
    <>
      <NavbarHeader/>
      {props.children}
    </>
  )
}

export default PageWidthNavbar
