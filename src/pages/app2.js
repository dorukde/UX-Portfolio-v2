import React from 'react'
import { Link } from 'gatsby'
import Scroller from '../components/scrollP'

const AppPage = () => (
  <div id="rect">
    <Scroller />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AppPage
