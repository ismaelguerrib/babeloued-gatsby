import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'

export default () => {
  return (
    <Fragment>
      <Layout>
        <p> Hello world!</p>
        <Link to='/blog/'>Clique ici si tu veux aller voir le blog</Link>
      </Layout>

    </Fragment>
  )

}
