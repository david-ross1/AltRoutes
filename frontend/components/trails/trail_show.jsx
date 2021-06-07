import React from "react";


class TrailShow extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.trailId);
  }

  render() {

    debugger 

    return(
      <div>
         djkfldsfsdfsdfsdfsdfdsfsdfsdfsdf

         
      </div>

    )
  }
}

export default TrailShow; 