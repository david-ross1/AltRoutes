import { faRedo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {NavLink, useLocation} from 'react-router-dom'

class TrailShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: 0}
  }

  componentDidMount() {
    debugger

    this.props.fetchTrail(this.props.match.params.trailId);
  }

  componentDidUpdate(prevProps) {

    debugger 

    if (this.props.match.params.trailId !== prevProps.match.params.trailId) {
          this.props.fetchTrail(this.props.match.params.trailId);
    }
  }


  render() {

    debugger 


    let { trail } = this.props;
    if (trail === undefined) {
      return null;  
    }

    // this.setState({ num: num + 1})


    return (
      <div>
        <p>Description:-------------------{trail.description}</p>
        <p>distance:--------------------- {trail.distance}</p>
        <p>elevation_gain:--------------- {trail.elevationGain}</p>
        <p>difficulty:------------------- {trail.difficulty}</p>
        <p>park_id: ----------------------{trail.parkId}</p>
        <p>route_type:------------------- {trail.routeType}</p>
        <p>lat:-------------------------- {trail.lat}</p>
        <p>lon:-------------------------- {trail.lon}</p>

        <div className="background">
          <div className="trail-name">
            <div className="trail-pictainer">
              <img className="trail-pic"></img>
            </div>

            <div className="trail-title-content">
              <h1>{trail.name}</h1>
              <div className="difficulty">
                <span>{trail.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/trails/9" exact>
          Trail 9
        </NavLink>

        <button onClick={() => this.props.history.push('/trails/4')}>test link</button>
      </div>
    );
  }
}

export default TrailShow 