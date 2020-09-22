import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import StyledHero from '../components/SimpleHero'
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Fragment>
      <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
          <Banner title="Viens au bled !" info="Ca fait combien de temps que tu n'es pas allé au bled ?">
            <Link to="/tours" className="btn-white">partir maintenant</Link>
          </Banner>
        </StyledHero>
        <About />
        <Services />
      </Layout>

    </Fragment>
  )
}
export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`
