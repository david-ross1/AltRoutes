import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState({
      fname: '',
      lname: '',
      email: '',
      password: ''
    })
  }

  demo(e) {
    e.preventDefault();
    const demoUser = { email: "more@trails.com", password: "passwordz" };
    this.props.formType === "Sign up"
      ? this.props.login(demoUser)
      : this.props.processForm(demoUser);
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
    const fnameLname =
      this.props.formType === "Sign Up" ? (
        <>
          <label>
            <input
              type="text"
              value={this.state.fname}
              onChange={this.update("fname")}
              className="login-input"
              placeholder='first name'
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={this.state.lname}
              onChange={this.update("lname")}
              className="login-input"
              placeholder='last name'
            />
          </label>
        </>
      ) : (
        ""
      );

    return (
      <div className="login-form-container">
        <h1>{this.props.formHeader}</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            {fnameLname}
            <br />
            <label>
              <input
                placeholder="email"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="password"
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
        <p>
          {this.props.alternativeFormText}
          &nbsp;{this.props.navLink}
        </p>
        {/* Please {this.props.formType} or {this.props.navLink} */}
      </div>
    );
  }
}

export default SessionForm;
