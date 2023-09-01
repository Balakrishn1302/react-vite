import React, { Component } from 'react'
import './DesignComponent.css'

export class DesignComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         btnStyle: {
            width: '100px',
            height: '25px',
            border: '2px solid green',
            borderRadius: '5px',
            fontSize: '12px'
         }
      }
    }

  render() {
    return (
      <>
        <button>Without Css</button>
        <button style={this.state.btnStyle}>With Css</button>
        <button className="button">Style with Class</button>
        <button type="button" className="btn btn-primary">Primary</button>
      </>
      
    )
  }
}

export default DesignComponent