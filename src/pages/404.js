import React from 'react'
import Header3 from '../components/header3'
import { graphql } from 'gatsby'

const NotFoundPage = () => (
  <div>
    <Header3 />
    <div className="ContentW">
      <div className="Content">
        <br />
        <br />
        <p>Hello!</p>
        <p>
          This is not the page you are looking for!<br />
          See you on the other side.
        </p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
