import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

import styles from '../css/error.module.css'


export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Comment t'es arrivé là ?">
          <Link to="/" className="btn-white">suis moi je te raccompagne</Link>
        </Banner>
      </header>

    </Layout >
  )
}
