import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../sass/layout.scss'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}
export default Layout