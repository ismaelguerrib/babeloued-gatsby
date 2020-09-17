import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"

export default () => {
  return (
    <Fragment>
      <Layout>
        <SimpleHero>
          <Banner title="Viens au bled !" info="Ca fait combien de temps que tu n'es pas allé au bled ?">
            <Link to="/tours" className="btn-white">partir maintenant</Link>
          </Banner>
        </SimpleHero>
        <About />
        <Services />
      </Layout>

    </Fragment>
  )

}
