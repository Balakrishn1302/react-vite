import React, { Component } from 'react'

export class LifeCycleComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
       name: "" 
      }

      console.log("Constructor")
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("state is updated with props")
    //     return {
    //         name: props.name
    //     }
    // }

    shouldComponentUpdate() {
        console.log("component should update")
        return true;
    }

    componentDidMount(){
        console.log("Complete mount")
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("previous state and props")
        console.log(prevProps, prevState)
        return null
    }

    componentDidUpdate() {
       console.log("Component did update")
    }

    clickEvent(){
        console.log("Click event")
        this.setState({
            name: "Update LifeCycle"
        })
    }

  render() {
    console.log("Render is updated")
    return (
      <>
        <div>LifeCycleComponent {this.state.name}</div>
        <button onClick={() => this.clickEvent()}>update</button>
      </>
    )
  }
}

export default LifeCycleComponent