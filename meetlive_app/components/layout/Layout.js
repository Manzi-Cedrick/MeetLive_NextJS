import React from 'react'
import Headers from './Headers'

function Layout(props) {
  return (
    <div>
      <Headers/>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout