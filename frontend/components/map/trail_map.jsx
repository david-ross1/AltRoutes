import React from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF2aWRyNzcxMSIsImEiOiJja3EwZXc2cmIwM2p5MzJxbjdyNTQyaHd4In0.fFMeIQHinrStEv1JU8x0AA";

class TrailMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lon: this.props.lon,
      zoom: 15,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lon, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      lon: lon,
      lat: lat,
      center: [lon, lat],
      zoom: zoom,
      style: "mapbox://styles/davidr7711/ckr8b2d6b45xm18nyixqw4dz5",
    });

    const Pin = (
      <svg
        className="pin"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
      </svg>
    );

    new mapboxgl.Marker(Pin).setLngLat([lon, lat]).addTo(this.map);
  }

  render() {
    return (
      <div>
        <div className="map-container" ref={this.mapContainer} />
      </div>
    );
  }
}

export default TrailMap;
