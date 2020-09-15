import React from 'react'
import { Link } from 'gatsby'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import { icons } from 'react-icons/lib'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noreferrer" >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; bab el oued from falzär company {new Date().getFullYear} all rigts reserved
      </div>
    </footer>
  )
}

export default Footer