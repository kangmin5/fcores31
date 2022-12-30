import React from 'react'
import Header from './components/menus/Header'

const Layout = ({Children}) => {
  return (
    <div >
        <Header/>
        <main>{Children}</main>
    </div>
  )
}

export default Layout