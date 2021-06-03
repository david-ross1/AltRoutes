import React from "react";
import { Link } from "react-router-dom";
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  clearState() {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.clearState();
  }

  demo(e) {
    e.preventDefault();
    this.props.login({ email: "demo1", password: "password" });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const firstNameLastNameFormField =
      this.props.formType === "Sign Up" ? (
        <>
          <label className="form-input">
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="login-input"
              placeholder="First name"
              required
            />
          </label>
          <br />
          <label className="form-input">
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="login-input"
              placeholder="Last name"
              required
            />
          </label>
        </>
      ) : (
        ""
      );

      

    return (
      <div className="session-bg">
        <div className="session-form">
          <h1>{this.props.formHeader}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            {this.renderErrors()}
            <br />
            {firstNameLastNameFormField}
            <br />
            <label className="form-input">
              <input
                placeholder="Email"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
                required
              />
            </label>
            <br />
            <label className="form-input">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="Password"
                required
              />
            </label>
            <br />
            <button className="primary-button">{this.props.formType}</button>
          </form>
          <p>
            {this.props.alternativeFormText}
            &nbsp;<span className='demo-text'>{this.props.navLink}</span>
          </p>

          <p>
            Roam anyway as a&nbsp;
            <button className="demo-text" onClick={this.demo}>
              demo user
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default SessionForm;
