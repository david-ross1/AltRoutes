import React from 'react'; 
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_container'
import TrailIndexContainer from '../../components/trails/trail_index_container'

const MainPage = ({ currentUser }) => {
  return (
    <div>
      <div className="main-page">
        <div className="main-page-content">
          <h1>Find your next trail</h1>
          {/* <SearchBarContainer />  */}
        </div>
      </div>

      <div className="main-page-sub">
        <h2>Pick the right trail for your day</h2>
        <div className="phone-flex">
          <div className="phone"></div>
          <p className='phone-text'>
            All our trails are verified by experts and reviewed by our global
            community of adventurers like you. <br /> <br/>
            {/* Whether you’re a hiker, biker or
            trail runner, we’ll help you find your next adventure. */}
          </p>
        </div>
      </div>
      <div className="main-page2">
        <div className="main-page-content2">
          {/* <h1>more text and stuff</h1> */}
        </div>
      </div>
      <TrailIndexContainer />
    </div>
  );
}

export default MainPage; 