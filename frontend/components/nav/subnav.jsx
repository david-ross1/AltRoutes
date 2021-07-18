// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import SearchResults from "../search/search_results";
// import { Link } from "react-router-dom";

// class SubNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: "",
//       focus: false,
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//     this.handleFocus = this.handleFocus.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//   }

//   update() {
//     return e => {
//       this.setState({ query: e.target.value }, this.handleSubmit);
//     };
//   }

//   handleFocus() {
//     this.setState({ focus: true });
//   }

//   handleBlur() {
//     this.setState({ focus: false });
//   }

//   handleSubmit(e) {
//     this.props.fetchSearchData(this.state.query);
//   }

//   render() {
//     const { data, parkName, parkId } = this.props;

//     return (
//       <>
//         <div className="sub-nav">
//           <div className="breadcrumbs">
//             <p>United State of America</p>
//             <FontAwesomeIcon icon={faChevronRight} />
//             {parkId === 1 ? <p>Washington</p> : <p>Maine</p>}
//             <FontAwesomeIcon icon={faChevronRight} />
//             <p>
//               <Link to={`/parks/${parkId}`}>{parkName}</Link>
//             </p>
//           </div>
//           <div
//             className="-sub-search-bar"
//             onFocus={this.handleFocus}
//             onBlur={this.handleBlur}
//           >
//             <form onSubmit={this.handleSubmit} className="sub-search-input">
//               <input
//                 type="text"
//                 placeholder="Enter a park or trail name"
//                 onChange={this.update()}
//               />
//               <FontAwesomeIcon icon={faSearch} className="search-icon" />
//             </form>
//             {this.state.query !== "" ? (
//               <SearchResults
//                 parent="sub"
//                 data={data}
//                 query={this.state.query}
//                 fetchSearchData={this.props.fetchSearchData}
//               />
//             ) : null}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default SubNav;
