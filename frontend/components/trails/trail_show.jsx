import React from "react";

class TrailShow extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {

    debugger 

    return this.props.fetchTrail(this.props.match.params.trailId);
  }

  render() {
    let { trail } = this.props 
    if (trail === undefined) {
      return null 
    }

    return(
      <div>
 

         <p>sfjkldjlfk</p>
         {trail.name}
         {trail.description}
      </div>

    )
  }
}

export default TrailShow; 