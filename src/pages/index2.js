import React from 'react'
import { Link, graphql } from 'gatsby'

import '../components/flexmenu.css'
import '../components/header.css'
import Img from 'gatsby-image'
import FProject from '../components/flexmenu'

const IndexPage = props => (

  <div className="ContentW">
  <div className="Content">
<Link to="/antler">
    <Img
              fluid={props.data.aBanner.childImageSharp.fluid}
              alt="Antler"
            />
    <fProject
            flexOverline="Product Design"
            flexTitle="Antler"
            flexDetails="Antler is a global early-stage VC &amp; accelerator, scaling with a lean, participatory, founder-centred approach. Antler’s platforms for the team, the founders and the portfolio companies require an adaptive and collaborative approach to solving problems."
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>

    <Link to="/strafe">
    <Img
              fluid={props.data.aBanner.childImageSharp.fluid}
              alt="Strafe"
            />
    <fProject
            flexOverline="UX-UI"
            flexTitle="Strafe"
            flexDetails="Strafe is the first esports tracking App for iOS and Android.
            Strafe provides a gamified experience with results, schedules,
            tournament info &amp; statistics for major esports titles."
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
  </div>
  </div>

)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 960) {
        ...GatsbyImageSharpFluid

      }
    }
  }
`

export const fluidImage2 = graphql`
  fragment fluidImage2 on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImage640 = graphql`
  fragment fluidImage640 on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 640) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImage800 = graphql`
  fragment fluidImage800 on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImage480 = graphql`
  fragment fluidImage480 on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 480) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    aBanner: file(relativePath: { eq: "antler_banner.jpg" }) {
      ...fluidImage
    }
  }
`
