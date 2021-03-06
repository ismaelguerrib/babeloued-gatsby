import React, { useState } from 'react'
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'
import { Link } from 'gatsby'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  console.log(isOpen)

  return (
    <div className={styles.navbar}>

      <div className={styles.navCenter}>

        <div className={styles.navHeader}>
          <a href="/"><img src={logo} alt="BabelOued logo" /></a>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon}></FaAlignRight>
          </button>
        </div>
        <ul className={
          isOpen
            ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}> {item.text} </Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>

    </div >
  )
}

export default Navbar