import React from 'react'
import { Link, graphql } from 'gatsby'

import Project from '../components/project'
import ProjectMini from '../components/projectmini'
import '../components/header.css'
import Img from 'gatsby-image'


const IndexPage = () => (
  <div id="Works_id" className="Works">
    <Link to="/antler">
    <Img
              fluid={props.data.kfOne.childImageSharp.fluid}
              alt="Keyflow App"
            />
    <br />         
    <HText1
            Header1="Antler"
            Text1="Antler is a global early-stage VC &amp; accelerator, scaling with a lean, participatory, founder-centred approach. Antler’s platforms for the team, the founders and the portfolio companies require an adaptive and collaborative approach to solving problems."
          />{' '}
          <br />
          <div className="Process2">  
          CASE STUDY ⟶
          </div>
    </Link>


    <Link to="/strafe">
      <Project
        ProjectName="Strafe"
        ProjectDetail="UX-UI"
        ProjectText1=" Strafe is the first esports tracking App for iOS and Android.
            Strafe provides a gamified experience with results, schedules,
            tournament info &amp; statistics for major esports titles."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Link to="/keyflow">
      <Project
        ProjectName="Keyflow"
        ProjectDetail="UX-UI"
        ProjectText1="Keyflow, headquartered in Stockholm (SE), is an event service solution for both event producers and guests around the globe."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Link to="/keyflowbusiness">
      <Project
        ProjectName="Keyflow Business"
        ProjectDetail="UX-UI"
        ProjectText1=" Keyflow Business, is the solution for pre-event and real-time guest
            list management of each event of a nightclub. It features guest-list
            management, offline support, real-time request handling for venue producers and teams."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Link to="/streetkak">
      <Project
        ProjectName="Streetkäk"
        ProjectDetail="Product Design"
        ProjectText1="Inspired by the growing streed food culture in Scandinavia and legendary Citroen H Van - Streetkäk is the first App to locate food trucks and street food vendors real-time, in the Nordic countries."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>
    <Link to="/otherworks">
      <ProjectMini ProjectName="— Personal" ProjectDetail="HCD, 3D, Print" />
    </Link>
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
      ...fluidImage2
    }
  }
`
