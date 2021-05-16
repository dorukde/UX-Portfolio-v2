import React from 'react'
import { Link, graphql } from 'gatsby'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

import '../components/projectpage.css'
import Img from 'gatsby-image'
import '../components/header2.css'

/*TEXT COMPONENTS */
import HText1 from '../components/text1'
import TextLi from '../components/textLi'
import BTextA from '../components/btn1'
import BTextB from '../components/btn2'

/*TESTING */

import Scroller from '../components/scrollP'

import svideo1 from '../images/strafe0.mp4'
import svideo2 from '../images/strafe1.mp4'
import svideo3 from '../images/strafe2.mp4'

import stvideo1 from '../images/poster/strafe0.png'
import stvideo2 from '../images/poster/strafe1.png'
import stvideo3 from '../images/poster/strafe2.png'

const strafePage = props => (
  <div id="rect">
    <Scroller />
    <div id="HeroAbout2" className="HeroAbout">
      <div className="AboutW">
        <div className="AboutProject">
          <div className="ProjectTitle">
            <div className="ProjectName2">Strafe</div>
            <div className="ProjectDetail2">UX-UI</div>
          </div>
          <div className="ProjectDescription">
            Strafe is the first esports tracking App for iOS and Android. Strafe
            provides a gamified experience with results, schedules, tournament
            info &amp; statistics for major esports titles.
          </div>{' '}
          <h1>
            <a
              href="https://itunes.apple.com/us/app/strafe/id934858411?ls=1&mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaApple />
            </a>{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.strafe.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay />
            </a>
            <div className="infobox">
              <div className="textbold">Platform:</div> iOS/Android
              <br />
              <div className="textbold">Duration:</div> 2018/5 – 2018/8 <br />
              <div className="textbold">Role:</div> UX-UI Designer (Consultant)
              <br />
              <div className="textbold">Method:</div> Agile + Lean UX <br />
            </div>
          </h1>
        </div>
      </div>

      <div className="ContentW">
        <div className="Content">
          <div className="infobox2">
            <div className="textbold">Platform:</div> iOS/Android
            <br />
            <div className="textbold">Duration:</div> 2018/5 – 2018/8 <br />
            <div className="textbold">Role:</div> UX-UI Designer (Consultant)
            <br />
            <div className="textbold">Method:</div> Agile + Lean UX
            <br />
          </div>
          <div className="SectionTitle2">Introduction</div>
          <HText1
            Header1="Esports is growing, and so does Strafe"
            Text1="
            Esports has made a significant impact on the video game industry with live streaming, increased amount of titles and large-scaled global tournaments. Strafe started as an esports tracking App, where users can follow tournaments and keep up with the news about their favourite teams/players. Strafe is also a prediction game platform with a ladder of 50,000+ esports fans. Fans enjoy the thrill of the esports in two ways:"
          />{' '}
          <br />
          <TextLi TextLi="Esports companion App Strafe that helps fans to track selected titles and stream live-tournaments as well as dive deep into detailed match-stats." />
          <TextLi TextLi="Esports prediction game Strafe Score to make esports tournaments more engaging and fun." />
          <br />
          <div class="embed-container">
            <iframe
              width="779"
              height="438"
              src="https://www.youtube.com/embed/u6Bzbm-WBcQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <HText1
            Header1="The Problem"
            Text1="Strafe Score is the feature that drives the engagement of esports fans to Strafe App. Current version is widely embraced by 50,000+ active players per month. However, engagement of players during monthly tournaments (Strafe Score Seasons) drops, as the gap between the players in live-leader board grows. Strafe Score is a system where correct predictions of every video-game title rewards players to be at the top of the leader board. Strafe Score's current dynamics has encouraged players to be interested in a wider-range of video-game titles. However, having a large number of active players of various game-titles have some challenges:"
          />{' '}
          <br />
          <TextLi TextLi="Global-coverage of tournaments means matches to be tracked during late-nights. Esports tournament locations affect the gameplay and performance on Strafe Score." />
          <TextLi TextLi="Having a competition of all the players in one-division and being rewarded for every title makes the game challenging. Longer seasons make it harder to close the gap." />
          <TextLi
            TextLi="Esports fans love to talk about esports titles and interact with each other. Strafe Sports profiles are focused on user-statistics rather than personality.  
          "
          />
          <HText1
            Header1="The Solution: New Strafe Score"
            Text1="
            I had the chance to collaborate with the Strafe Team for a short-and-fun 3-month period with the complete design thinking process to increase esports fan engagement of Strafe Score. During my time with Strafe, I have created an efficient visual design workflow including Sketch Library, Wireframe generation and Zeplin for collaboration with developers. We have introduced new features and set-up a user research framework for addition and discovery of new-features. New Strafe Score features aimed to engage esports fans with:"
          />{' '}
          <br />
          <TextLi TextLi="New Strafe Score Leaderboard: Multiple leader boards for each video-game title to increase engagement of title or game-type focused audience. Divisions and multiple-levels to involve a wider-range of the audience in the thrill of the competition." />
          <TextLi TextLi="Friends feature to increase interaction and engagement of friends. Strafe Score to display how a fan compares to friends, making the seasons more fun." />
          <TextLi TextLi="Brackets (playoffs) are decided during tournaments, making it hard to follow and predict real-time results. Prototypes of pre-bracket predictions for comparison." />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Strafe - App"
          />
          <div className="SectionTitle2">The Process</div>
          <div className="Process">
            <strong>Research:</strong> Contextual Analysis, Surveys (Global
            esports fans), Video Interviews (Q&amp;A, presentation, feedback),
            Focus groups (e.g. Top-ladder), Data Analytics
          </div>
          <div className="Process">
            <strong>Ideas:</strong> User Journey Map, Personas
          </div>
          <div className="Process">
            <strong>Design:</strong> Design for Localisation, in-App Onboarding,
            Heuristic Evaluation, Sketching, Design System, Wireframing &amp;
            Zeplin
          </div>
          <div className="Process">
            <strong>Prototype:</strong> High Fidelity Prototype, Working
            Prototype (Staging)
          </div>
          <div className="Process">
            <strong>Test-Evaluate:</strong> User Testing (individuals),
            Field (Feature) Testing, Functional Testing, Testing &amp; Bug
            Reporting
          </div>
          <HText1
            Header1="Research of Prediction"
            Text1="
            Popularity of Strafe as a gamified esports platform has been growing within a global audience. The research process started with the contextual goal-analysis of Strafe fans. Initially, a focus-group of highly-engaged users (top-players) were interviewed initially to understand repetitive pain-points related with game dynamics. A group of Strafe Score players from different continents, age-groups and occupations were selected initially. Video-interviews were carried out remotely involving 3 people (1 conductor, 1 interviewer, 1 esports fan); these interviews were later scripted in order to find common-patterns and frictions based on parameters (location, age, individual conditions). The questions were aimed to gain insights on daily gameplay patterns, personal friction points, interest in esports, real-life interactions of players and esports-related goals. The interviews concluded with a short-presentation of features discovery and open-ended questions which resulted in unique and meaningful feedbacks."
          />
          <HText1
            Header1="Ideas: Thinking about the Features"
            Text1="
            Interviews have provided insights about how playing Strafe Score fits into the daily routines of the players, their goals and what drives them to play at a competitive edge. Learning friction-points of the current version of the leader board helped ideation of game-title focused features. Further user research has shown that friend-engagement increases overall-engagement, even when the competitors are not at their peak. Some of the ideas to be explored were:"
          />
          <TextLi TextLi="Odd &amp; Streak mechanism to reward players who predict the least-probable correct results consistently." />
          <TextLi TextLi="Friends feature to keep in touch and to compete with friends. Turns out it is also a way to find esports fans who share similar interests." />
          <TextLi TextLi="Pre-bracket predictions (discovery phase): Matches at the higher ladder playoffs are decided during the tournaments at a different time zone. Pre-bracket prediction is a way to reward players who come first." />
          <TextLi TextLi="Boosters (discovery phase): Interviews have shown that competitive players prefer personality over pay-to-win mechanism. A possible way to gamify Strafe Score further is to limit the number of boosters to be used at a critical point of the season. " />
          <TextLi TextLi="Divisions (Leagues): Since the number of active players are over 50,000, players have the tendency to lose interest during the season. In addition to shortening the duration of the season, divisions and leagues similar to the league mechanisms of popular game-titles would keep the competitiveness high continuously." />
          <br />
          <Img
            fluid={props.data.sfIcons.childImageSharp.fluid}
            alt="Strafe - Divisions"
          />
          <HText1
            Header1="Design: Visual Iterations on Strafe Score"
            Text1="
            Even though I have been involved with User Interface design of the library components and new-feature screens, my focus had been on improving the user experience. Branding and visual design guidelines were not updated during my consultation sprints of Strafe Score. Initially, a library of wireframe components of Sketch App was built to increase interactive collaboration with other stakeholders (including PO and developers). 
            
            Visual-design workflow in Agile sprints included iterations of high-density assets made for new Strafe Score features, such as Friends functionality. The assets included onboarding, multiple-states of screens (empty, logged-out, etc.), which finally formed high-density wireframes built by 'Overflow' App. Zeplin boards were grouped and named based on features/sprints to create a reference point when working remotely with developers."
          />
          <br />
          <Img
            fluid={props.data.sfOnboarding.childImageSharp.fluid}
            alt="Strafe - Friends Feature Onboarding"
          />
          <Img
            fluid={props.data.sfFlow.childImageSharp.fluid}
            alt="Strafe - Flow Diagram"
          />
          <Img
            fluid={props.data.sfWflow.childImageSharp.fluid}
            alt="Strafe Design: Workflow"
          />
          <HText1
            Header1="Test - Evaluate"
            Text1="Interactive high-fidelity flow diagrams (built by Sketch App itself) form the initial and the basic prototyping of different user-states. However, discovery of new features and micro-interactions required more specificity and higher-fidelity for testing and presentation purposes. Discovery prototypes were built using Principle App to compare possible mechanisms of pre-bracket predictions. Strafe App has 2 native mobile applications (iOS &amp; Android) and I had been available to support the development team during development-phase with questions or when modifications were required. Internal testing includes testing of both applications on staging environment and all platforms have the same feature-set and visual style aligned with relevant design guidelines. Evaluation and testing of the product features is a continuous process, which involves a focus-group for user-testing. Here are some of the images &amp; prototypes built during the discovery phase of new features:           
            "
          />
          <br />
          <Img
            fluid={props.data.sfLeaderboard.childImageSharp.fluid}
            alt="Strafe Discovery: Leaderboard"
          />
          <br />
          <div className="prototypes">
            <div className="prototype1">
              <video
                poster={stvideo1}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={svideo1} />
              </video>
            </div>
            <div className="prototype1">
              <video
                poster={stvideo2}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={svideo2} />
              </video>
            </div>
            <div className="prototype1">
              <video
                poster={stvideo3}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={svideo3} />
              </video>
            </div>
          </div>
          <HText1
            Header1="Conclusions"
            Text1="Strafe is an exciting project that keeps up with the growth of esports built on a solid foundation. I had the chance to work as the only product-designer as a member of a collaborative team. Setting up user-research methodology, synthesis of new ideas and improving visual design-workflow have been efficient and fun processes. During user-research we have learned a lot about the transition of an esports player to an esports fan, who needs to time-manage smartly. Strafe fits in very well to the transition from the enthusiasm of youth to responsible-fun of adulthood. Both of the core-functionalities (tournament tracking and prediction game) are balanced and future-challenges will be about having a larger user-base, localisation for the global audience and improving the dynamics of competitive edge. I think Strafe is looking to a bright future on following subjects:"
          />
          <br />
          <TextLi TextLi="Number of esports titles and their tournaments are increasing globally. As these numbers increase, Strafe Score would iterate into localised leagues and providing localised content." />
          <TextLi TextLi="Esports fans are evolving from players to spectators. With such growth the product might consider becoming an esport 'fantasy league' and branch out to different products." />
          <TextLi TextLi="Esports fans would like to see content from different sources curated at Strafe. Exclusive-content and future tournaments can become a part of the user experience in the future." />
          <div className="BWrapper">
            <Link to="/otherworks">
              <BTextA BHeader1="⟵ Previous" BText1="Other Works" />
            </Link>
            <Link to="/keyflow">
              <BTextB BHeader2="Next ⟶" BText2="Keyflow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default strafePage

export const pageQuery = graphql`
  query {
    sfOne: file(relativePath: { eq: "kf1.jpg" }) {
      ...fluidImage2
    }
    sfTwo: file(relativePath: { eq: "kfTwo.jpg" }) {
      ...fluidImage2
    }
    sfIcons: file(relativePath: { eq: "strafe_icons.jpg" }) {
      ...fluidImage
    }
    sfOnboarding: file(relativePath: { eq: "st_onboarding.jpg" }) {
      ...fluidImage
    }
    sfLeaderboard: file(relativePath: { eq: "stLeaderboard.jpg" }) {
      ...fluidImage
    }
    sfFlow: file(relativePath: { eq: "stFlow.jpg" }) {
      ...fluidImage
    }
    sfWflow: file(relativePath: { eq: "stWflow.jpg" }) {
      ...fluidImage
    }
    sfApp: file(relativePath: { eq: "sf_app.jpg" }) {
      ...fluidImage
    }
  }
`
