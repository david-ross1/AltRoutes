import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formHeader: 'Create your free account',
  formType: 'Sign Up',
  form: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  },
  alternativeFormText: 'Already have an account?',
  navLink: <Link to="/login">Log in</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
