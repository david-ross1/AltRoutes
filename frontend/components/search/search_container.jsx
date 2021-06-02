import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {
  clearSearch,
  fetchSearch,
} from "../../actions/search_action";

const mapStateToProps = (state) => ({
  results: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearch: (entry) => dispatch(fetchSearch(query)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar); 