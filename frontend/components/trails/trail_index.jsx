import React from "react";
import TrailIndexItem from './trail_index_item' 


class TrailIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.fetchTrails();
  }

  render() { 


    let { trails } = this.props;

    if (trails === undefined) return null; 

    // debugger 
    return (
      <div>
        {trails.map((trail) => (
          <TrailIndexItem key={trail.id} trail={trail} />
        ))}
      </div>
    );
  }
}

export default TrailIndex;
