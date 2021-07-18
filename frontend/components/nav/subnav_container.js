import { connect } from "react-redux";
import SubNav from "./subnav";
import { fetchSearchData, clearSearchData } from "../../actions/search_actions";

const mapStateToProps = state => {
  return {
    results: state.search,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearchData: () => dispatch(clearSearchData()),
    fetchSearchData: query => dispatch(fetchSearchData(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubNav);
