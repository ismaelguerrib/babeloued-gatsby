import React, { useState } from 'react'
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <div className={styles.navbar}>

      <div className={styles.navCenter}>

        <div className={styles.navHeader}>
          <img src={logo} alt="BabelOued logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon}></FaAlignRight>
          </button>

        </div>

      </div>

    </div>
  )
}

export default Navbar