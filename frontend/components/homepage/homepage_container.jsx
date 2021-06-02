import { connect } from "react-redux";

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.user[session.currentUser.id],
});

export default connect(mapStateToProps, null)(HomePage);