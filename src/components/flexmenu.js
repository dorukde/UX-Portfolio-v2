import React from 'react'
import './flexmenu.css'

const FProject = props => (
  <div className="flexMenu">
    <div className="flexDiv">
      <div className="flexOverline">{props.flexOverline}</div>
      <div className="flexTitle">{props.FlexTitle}</div>
    </div>
    <div className="flexDiv">
      <div className="flexDetails">{props.flexDetails}</div>
      <div className="flexButton">{props.flexButton}</div>
    </div>
  </div>
)

export default FProject
