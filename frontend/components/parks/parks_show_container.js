import { connect } from 'react-redux';
import { fetchPark } from '../../actions/park_actions';
import ParkShow from './parks_show';

const mapStateToProps = (state, ownProps) => ({
    park: state.entities.parks[ownProps.match.params.parkId]
});

const mapDispatchToProps = (dispatch) => ({
    fetchPark: parkId => dispatch(fetchPark(parkId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkShow);