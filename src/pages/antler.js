import React from 'react'
import { Link, graphql } from 'gatsby'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import '../components/projectpage.css'
import Img from 'gatsby-image'

/*TEXT COMPONENTS */
import HText1 from '../components/text1'
import Text2 from '../components/text2'
import TextLi from '../components/textLi'
import BTextA from '../components/btn1'
import BTextB from '../components/btn2'

import Scroller from '../components/scrollP'

const skakPage = props => (
  <div id="rect">
    <Scroller />
    <div id="HeroAbout2" className="HeroAbout">
      <div className="AboutW">
        <div className="AboutProject">
          <div className="ProjectTitle">
            <div className="ProjectName2">Antler</div>
            <div className="ProjectDetail2">Product Design</div>
          </div>
          <div className="ProjectDescription">
          Antler is a global early-stage VC &amp; accelerator, scaling with a lean, participatory, founder-centred approach. Antler’s platforms for the team, the founders and the portfolio companies require an adaptive and collaborative approach to solving problems. 

          </div>
          <h1>
            <div className="infobox">
              <div className="textbold">Platform:</div> Web{' '}
              <br />
              <div className="textbold">Duration:</div> 2019/12 – Present <br />
              <div className="textbold">Role:</div> Senior UX Designer
              <br />
              <div className="textbold">Method:</div> Agile, Lean UX <br />
            </div>
          </h1>
        </div>
      </div>
      <div className="ContentW">
        <div className="Content">
          <div className="infobox2">
            <div className="textbold">Platform:</div> Web <br />
            <div className="textbold">Duration:</div> 2019/12 – Present <br />
            <div className="textbold">Role:</div> Senior UX Designer
            <br />
            <div className="textbold">Method:</div> Agile, Lean UX
            <br />
          </div>
          <div className="SectionTitle2">Introduction</div>
          <HText1
            Header1="Antler VC &amp; Digital Platforms"
            Text1="Antler's digital platforms are designed to facilitate scalable solutions, highly participatory and integrated processes, running on a design system and an open-source project (firetable.io). My responsibility area covers an end-to-end design process, involving qualitative and quantitative research, facilitating co-design (building IA, journey mapping), collaborating with a lean-agile software development team, running usability testing at various scales and coaching portfolio companies."
          />
          <Text2 Text2="Streetkäk's visual language has been crafty and humanistic, with a team having a complete 'DIY' approach. After having collaborated with the food-truck chefs and observing their interaction with the community, the visual language has shaped as  crafty, custom and 'humanist', as tech-savvy as greasy hands and a hungry mind." />
          <br />
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.antOne.childImageSharp.fluid}
              alt="Antler Ecosystem"
            />
          </div>
          <HText1
            Header1="The Problem: Complexity of Program &amp; Ops"
            Text1="A founder’s journey from the application phase to becoming a co-founder is a complex process with multiple stages, requiring an adaptive and participatory platform. These stages involve application to program, matching co-founders, validating ideas, coaching, pitching to investors and scaling product/platform. A unique set of challenges emerged in this multi-phased, complex system with diverse stakeholders (founders, coaches, team, advisors, investors):"
          />{' '}
          <br />
          <TextLi TextLi="Founder activities during program, IC, and demo-day require real time and active participation from a large variety of stakeholders globally." />
          <TextLi TextLi="Current cloud based data operations frameworks lack customisation, depending on building new features (and UI) continuously. This is a challenge on rapid-prototyping and continuous testing within time constraints (e.g. during a program’s specific phase)." />
          <TextLi TextLi="Localisation and scalability depend on agile and lean processes, requiring adaptive solutions – as in localised onboarding, application form. Active participation from all the stakeholders require extra technical capability in each location." />
          <TextLi TextLi="Current no-code or low-code solutions are not flexible for adaptive solutions, lacking access control, automating tasks, data validation and managing operations." />
          <TextLi TextLi="Program (first 3 months) runs on design sprints as a framework for validating product/platform ideas. However, scaling startups often require a deeper engagement in each design thinking step – just like becoming a marathon runner after running a series of sprints." />{' '}
          <HText1
            Header1="The Solution: Antler Platform &amp; firetable.io"
            Text1="Enabling active participation is one of the core principles driving Antler’s operations. Engagement of stakeholders vary as the founders are at various stages of the program – e.g. higher engagement from coaches during the program."
          />{' '}
            <Img
              fluid={props.data.antTwo.childImageSharp.fluid}
              alt="schematics of the platform, Firetable and users"
            />
            <Img
              fluid={props.data.antThree.childImageSharp.fluid}
              alt="schematics of the platform, Firetable and users"
            />
          <Text2 Text2="Founders experience correlates with the global team’s capabilities – through multiple platforms and external services communicating with each other.  Building a scalable, adaptive platform while making data operations accessible with a lean engineering team required a systems thinking approach. Every local program team relied on web forms to track founder experience and spreadsheets on the cloud for data operations – often followed by a data-entry to an internal platform. " /> <br />
          <Text2 Text2="Firetable.io is designed as an adaptive platform with a spreadsheet interface and a powerful editor for data-management operations to empower non-technical team members. Reducing the dependency to external services means having secure data, rapid-prototyping capabilities on staging platforms, granular control on user management and interface-building capabilities for the team members. Internal onboarding and form builders running on firetable.io and maintaining a design system enabled co-building agile solutions for multiple-contexts:" />
          <br />
          <TextLi TextLi="firetable.io (open source project, making data-ops accessible and scalable for Antler team)" />
          <TextLi TextLi="firegrid &amp; fireforms (form &amp; onboarding builder running on firetable.io)" />
          <TextLi TextLi="Founder's Hub (facilitating the acceleration program)" />
          <TextLi TextLi="Team Hub (running program and portfolio-operations at scale)" />          
          <TextLi TextLi="antler.co &amp; platform design system (managing the design process in collaboration with external contractors)" />
          <br />          
          <br />
          <div className="SectionTitle2">The Process</div>
          <div className="Process">
            <strong>Research:</strong> Field Studies (Ethnographic Research, Contextual Inquiry), Remote 1:1 Interviews, Quantitative Analysis (Userlook, Google Analytics)
          </div>
          <div className="Process">
            <strong>Ideas:</strong> IA (co-design), Affinity Mapping, User Journey Mapping, Personas
          </div>
          <div className="Process">
            <strong>Design:</strong> Design System, (zeroheight), Designing for Accessibility, Platforms Onboarding, UX Auditing, Sketching, Wireframing &amp; Component based Handoff (Figma, Zeplin), Documentation 
          </div>
          <div className="Process">
            <strong>Prototype:</strong> High Fidelity Prototype (Principle, ProtoPie), Working Prototype (Staging Environment)
          </div>
          <div className="Process">
            <strong>Test-Evaluate:</strong> Usability Testing (remote), Functional Testing at Scale, Generating Documentation, Internal Testing &amp; Bug Reporting
          </div>
          <HText1
            Header1="Research: Founders &amp; Operations"
            Text1="User research process started with conducting interviews (1:1, remote) and facilitating co-design workshops with the founders and Antler team members to co-build personas, generate user insights and building a journey map of founders starting from their first contact with Antler – application to program."
          />
          <Img
            fluid={props.data.antFour.childImageSharp.fluid}
            alt="Founder Journey Map"
          />
          <Text2 Text2="Initial state of the Hub mostly facilitated learning about co-founders, resource and event management during early-stages of the program. Early user research provided insights about the digital founder experience, impact of engagement from the team:" /> <br />
          <TextLi TextLi="Understanding usability issues when interacting with other co-founders through the platform" />
          <TextLi TextLi="Finding the gaps between the founder experience in physical space (presentations, workshops, meetings) and the digital platform" />
          <TextLi TextLi="Unique challenges of local program teams, finding mismatches with the Hub" />
          <TextLi TextLi="Challenges of utilising external platforms, resources and understanding founder patterns during program (seeking integration possibilities)" />
          <TextLi TextLi="Operations, data-management patterns through external platforms of Antler team members" /><br />
          <Text2 Text2="The methods used for the following steps included contextual inquiry and quantitative methods (Smartlook for tracking user behaviour, Google Analytics). Further research focused on coaching, post-investment and global operations and the Founder Hub, through contextual inquiry and structured interviews:" /> <br />
          <TextLi TextLi="Challenges of gathering and presenting meaningful data to the investment committee at the end of 3 month coaching process" />
          <TextLi TextLi="Patterns and time-constraints of marking, note-taking and coach-to-coach interactions" />
          <TextLi TextLi="Understanding domain-specific points for assessment, impact of retrospective and final momentum of the team" />
          <TextLi TextLi="Generating an information structure for feedback: high-level, domain-specific, retrospective documentation" /><br />
          <Text2 Text2="Multiple user research sessions have provided multiple actionable insights, as well as helping generate a conceptual map of problems – presentation of findings and analyses informed the following ideation sessions." /> <br />

          <HText1
            Header1="Ideation: Co-designing the platform"
            Text1="Ideation sessions were informed by multiple methods and layers of information coming from the founders and the stakeholders. Features of the team platforms (Team Hub, firetable.io) and founder’s applications were co-designed through workshops – Affinity Mapping, HMW (how might we) and IA (information architecture).
            "
          />
          <Img
            fluid={props.data.antFive.childImageSharp.fluid}
            alt="Remote affinity mapping"
          />
          <Text2 Text2="Antler team members, founders and external stakeholders have contributed to the multiple layers of the platform." /> <br />
          <TextLi TextLi="Founder application and onboarding can be localised, personalised and contextualised based on the location, background and interests." />
          <TextLi TextLi="Founders, coaches and advisors can learn about each other and their interactions in the physical world can generate information through contextual rapid-feedback interfaces." />
          <TextLi TextLi="Repetitive tech-requests were reduced by making the data-operations accessible to provide a scalable solution to the team." />
          <TextLi TextLi="Antler.co navigation, content and dynamic content is redesigned based on the IA." />
          <Img
            fluid={props.data.antSix.childImageSharp.fluid}
            alt="IA and HMW"
          />
          <TextLi TextLi="Firetable’s side-editor, sub-tables feature (arrays, objects inside one cell), import/export features are designed based on Antler team’s data-management requirements." />
          <TextLi TextLi="A library of digital portfolio pages of the startups are directly generated through Antler team’s data-management operations and firetable.io plug-ins." />
          <TextLi TextLi="The team has developed the capability for all the Antler team members to build forms and work with data on Firetable through firetable.io integration." />
          <Img
            fluid={props.data.antSeven.childImageSharp.fluid}
            alt="Firetable Mindmap – themes"
          />
          <HText1
            Header1="Design making &amp; Design System"
            Text1="Design principles of Antler platforms are built to be scalable, adaptive to multiple contexts (external web, founder requirements, internal operations), collaborative (welcoming every stakeholders expertise) and accessible in clarity of content, technical threshold and following WCAG 2.0 guidelines."
          />
          <Text2 Text2="Working with a lean engineering team through agile methodology requires having a well documented and maintained design system. Antler Platform’s design system is built, considering these constraints:" /> 
          <TextLi TextLi="Compatibility with the updates on external React Frameworks (React, styled-components, Gatsby, material)" />
          <TextLi TextLi="Adaptive complexity on UI components for multiple contexts" />
          <TextLi TextLi="Contextual and responsive visual grid (adaptive visual density and spacing on antler.co/platforms)" />
          <TextLi TextLi="Expressive design system to reflect the visual language of the portfolio company brands (accessible colour palette for branded pages)" />
          <TextLi TextLi="Visual consistency between founder experience on Founder and the team operations through Team Hub – through multi-contextual components structure." />
          <br />
          <HText1
            Header1="Test - Evaluate"
            Text1="Usability of the team operations, onboarding of founders and post-investment processes were evaluated through qualitative usability testing methods. Multiple prototyping tools and methods were used based on the usability testing scenario:"/>
          <TextLi TextLi="Understanding the usability based on completing a task (e.g. coaching feedback) – maze.design (and think-aloud)" />
          <TextLi TextLi="Principle, Protopie for micro-interactions" />
          <TextLi TextLi="Field studies (contextual inquiry) for founder experience – contextual impact of physical environment on usability (e.g. usability of remote coaching vs. coaching in-person)" />
          <br />
          <Text2 Text2="Quantitative usability testing was used for the analysis of large-scaled experiences (external web and founder experience) through surveys, analytics (e.g. Google Analytics) and event tracking (user tracking, replays)." /> 
          <Text2 Text2="Evaluation and testing has informed multiple iterations of features on Founder &amp; Team Hub platforms, improving longer time spent in the Hub for founders, adoption of coaching features from the team and a higher engagement to the external platforms (antler.co, demo day event pages)." /> 
          <br />
          <HText1
            Header1="Conclusions"
            Text1="Antler’s platforms, team operations and global growth provided a unique set of interesting challenges. A diverse group of team members, stakeholders, external users and founders have experienced transitioning into engaging with the program and the platforms remotely. This transition required remote co-design processes and redesign of team operations. As a result, firetable.io has emerged and grown as an interesting open-source project for the global developer community. Designing an open-source project required a more inclusive research process and a more scalable approach to digital product design."
          />

          <br />
          <HText1
            Header1="Further Reading"
            Text1="Another interesting design challenge was to advocate design thinking, usability and improve the UX maturity of the organisation and to introduce UX to founders. I have had the chance to run multiple online presentations and conduct coaching through workshops with founders – as well as writing documentation and an article for the curious founders."
          />
          <TextLi TextLi="A brief introduction to UX for the curious founders (D.Demircioglu)" />
          <TextLi TextLi="Firetable in Use: How We Built Our Virtual Live Event Platform With Firestore and Firetable
 (S.Alcantara)" />

          <div className="BWrapper">
            <Link to="/otherworks">
              <BTextA BHeader1="⟵ Previous" BText1="Other Works" />
            </Link>
            <Link to="/strafe">
              <BTextB BHeader2="Next ⟶" BText2="Strafe" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default skakPage

export const pageQuery = graphql`
  query {
    antOne: file(relativePath: { eq: "sk1.jpg" }) {
      ...fluidImage2
    }
    antTwo: file(relativePath: { eq: "sk2.jpg" }) {
      ...fluidImage2
    }
    antThree: file(relativePath: { eq: "sk3.jpg" }) {
      ...fluidImage2
    }
    antFour: file(relativePath: { eq: "sk4.jpg" }) {
      ...fluidImage2
    }
    antFive: file(relativePath: { eq: "sk5.jpg" }) {
      ...fluidImage
    }
    antSix: file(relativePath: { eq: "sk6.jpg" }) {
      ...fluidImage
    }
    antSeven: file(relativePath: { eq: "sk7a.jpg" }) {
      ...fluidImage
  }
`
