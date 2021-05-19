import React from 'react'
import { Link, graphql } from 'gatsby'

import '../components/flexmenu.css'
//import '../components/header.css'
import Img from 'gatsby-image'
import FlexMenu from '../components/flexmenu'
import Scroller from '../components/scrollP'


const IndexPage = props => (
  <div className="ContentW">
  <div className="Content">
  <div id="rect">
  <Scroller />

  <Link to="/antler">
<Img
              fluid={props.data.aBanner.childImageSharp.fluid}
              alt="Strafe"
            />
    <FlexMenu
            flexOverline="PRODUCT DESIGN"
            flexTitle="ANTLER"
            flexDetails="Antler is a global early-stage VC &amp; accelerator, scaling with a lean, participatory, founder-centred approach. Antler’s platforms for the team, the founders and the portfolio companies require an adaptive and collaborative approach to solving problems."
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
<br />
<br />
    <Link to="/strafe">
    <Img
              fluid={props.data.sBanner.childImageSharp.fluid}
              alt="Strafe"
            />
    <FlexMenu
            flexOverline="UX-UI"
            flexTitle="STRAFE"
            flexDetails="Strafe is the first esports tracking App for iOS and Android.
            Strafe provides a gamified experience with results, schedules,
            tournament info &amp; statistics for major esports titles."
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
    <Link to="/keyflow">
    <Img
              fluid={props.data.kBanner.childImageSharp.fluid}
              alt="Keyflow"
            />
    <FlexMenu
            flexOverline="UX-UI"
            flexTitle="KEYFLOW"
            flexDetails="Keyflow, headquartered in Stockholm (SE), is an event services solution for both event producers and guests around the globe.
            "
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
    <br />
    <br /> 
    <Link to="/keyflowbusiness">
    <Img
              fluid={props.data.kbBanner.childImageSharp.fluid}
              alt="Keyflow Business"
            />
    <FlexMenu
            flexOverline="UX-UI"
            flexTitle="KEYFLOW BUSINESS"
            flexDetails="Keyflow Business, is the solution for pre-event and real-time guest list management of each event of a nightclub. It features guest-list management, offline support, real-time request handling, considering the goals of venue producers and their teams."
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
    <br />
    <br /> 
    <Link to="/streetkak">
    <Img
              fluid={props.data.skBanner.childImageSharp.fluid}
              alt="Streetkäk"
            />
    <FlexMenu
            flexOverline="Product Design"
            flexTitle="STREETKÄK"
            flexDetails="Inspired by the growing street food culture in Scandinavia, and legendary Citroen H Van. Streetkäk is the first App to locate food trucks and other street food vendors in real time, in the Nordic countries such as Sweden, Denmark, Norway and Finland."
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
    <br />
    <br /> 
    <Link to="/otherworks">
    <Img
              fluid={props.data.ppBanner.childImageSharp.fluid}
              alt="Personal Projects"
            />
    <FlexMenu
            flexOverline="HCD, IxD, 3D, Print"
            flexTitle="PERSONAL"
            flexDetails="My personal design projects - including Interaction Design, Wearables, UI, Human Centred Product Design concept, 3D, Album Covers, Live Illustration and Print Design"
            flexButton="CASE STUDY ⟶"
          />{' '}
    </Link>
    <br />
    <br /> 
  </div>
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
export const pageQuery = graphql`
  query {
    sBanner: file(relativePath: { eq: "strafe_banner.jpg" }) {
      ...fluidImage
    }
  }
`

export const pageQuery = graphql`
  query {
    kBanner: file(relativePath: { eq: "kf_banner.jpg" }) {
      ...fluidImage
    }
  }
`


export const pageQuery = graphql`
  query {
    kbBanner: file(relativePath: { eq: "kf_business_banner.jpg" }) {
      ...fluidImage
    }
  }
`


export const pageQuery = graphql`
  query {
    skBanner: file(relativePath: { eq: "streetkak_banner.jpg" }) {
      ...fluidImage
    }
  }
`

export const pageQuery = graphql`
  query {
    ppBanner: file(relativePath: { eq: "personal_banner.jpg" }) {
      ...fluidImage
    }
  }
`