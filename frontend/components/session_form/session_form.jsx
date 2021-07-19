import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.clearState = this.clearState.bind(this);
    this.setErrorClass = this.setErrorClass.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  clearState() {
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);
  }

  demo(e) {
    e.preventDefault();
    this.props.login({ email: 'demo11', password: 'passwordz' });
  }

  setErrorClass(keyword) {
    return this.props.errors.join(' ').includes(keyword)
      ? 'errored'
      : 'login-input';
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const firstNameLastNameFormField =
      this.props.formType === 'Sign Up' ? (
        <>
          <label className="form-input">
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              placeholder="First name"
              className={this.setErrorClass('First')}
            />

            {this.props.errors.map((error) =>
              error.includes('First') ? (
                <div className="error-text">Enter your first name.</div>
              ) : (
                ''
              )
            )}
          </label>
          <br />
          <label className={`form-input${this.setErrorClass('Last')}`}>
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className={this.setErrorClass('Last')}
              placeholder="Last name"
            />
            {this.props.errors.map((error) =>
              error.includes('Last') ? (
                <div className="error-text">Enter your last name.</div>
              ) : (
                ''
              )
            )}
          </label>
        </>
      ) : (
        ''
      );

    return (
      <div>
        <div className="session-bg">
          <div className="session-form">
            <h1>{this.props.formHeader}</h1>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br />
              <br />
              {firstNameLastNameFormField}
              <br />
              <label className="form-input">
                <input
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className={this.setErrorClass('Email')}
                />
                {this.props.errors.map((error) =>
                  error.includes('Email') ? (
                    <div className="error-text">Email is not valid.</div>
                  ) : (
                    ''
                  )
                )}
              </label>
              <br />

              <label className="form-input">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className={this.setErrorClass('Password')}
                />
                {this.props.errors.map((error) =>
                  error.includes('Email') ? (
                    <div className="error-text">
                      Password must be 6 characters long.
                    </div>
                  ) : (
                    ''
                  )
                )}
              </label>
              <br />
              <button className="primary-button">{this.props.formType}</button>
            </form>
            <p>
              {this.props.alternativeFormText}
              &nbsp;<span className="demo-text">{this.props.navLink}</span>
            </p>

            <p>
              Roam anyway as a&nbsp;
              <button type="button" className="demo-text" onClick={this.demo}>
                demo user
              </button>
            </p>
          </div>
        </div>

        <div>
          <div className="main-page-login">
            <div className="main-page-content-login">
              <div className="login-text">
                <h1 className="h1login">
                  Whether you’re a hiker, biker or trail runner, we’ll help you
                  find your next adventure.
                </h1>
              </div>
            </div>
          </div>
          <div className="main-page22">
            <div className="main-page-content22" />
          </div>
          <div className="main-page-sub">
            <h2>Pick the right trail for your day</h2>
            <div className="phone-flex">
              <div className="phone" />
              <p className="phone-text">
                All our trails are verified by experts and reviewed by our
                global community of adventurers like you. <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
