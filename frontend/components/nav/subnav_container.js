import { connect } from "react-redux";
import SubNav from "./subnav";
import { fetchSearchData, clearSearchData } from "../../actions/search_actions";

const mapStateToProps = state => ({
  data: state.search,
});

const mapDispatchToProps = dispatch => ({
  clearSearchData: () => dispatch(clearSearchData()),
  fetchSearchData: query => dispatch(fetchSearchData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubNav);
