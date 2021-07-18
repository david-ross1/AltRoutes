import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchSearchData, clearSearchData } from "../../actions/search_actions";

const mapStateToProps = state => ({
  data: state.search,
});

const mapDispatchToProps = dispatch => ({
  clearSearchData: () => dispatch(clearSearchData()),
  fetchSearchData: query => dispatch(fetchSearchData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
