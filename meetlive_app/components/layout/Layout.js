import React from 'react'
import Headers from './Headers'

function Layout(props) {
  return (
    <>
      <Headers/>
      <main>{props.children}</main>
    </>
  )
}

export default Layout