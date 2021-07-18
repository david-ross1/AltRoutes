import { connect } from "react-redux";
import MainPage from "./main_page";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

export default connect(mapStateToProps, null)(MainPage);
