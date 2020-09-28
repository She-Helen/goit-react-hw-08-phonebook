import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { login } from '../redux/auth/authOperations';
import { CustomInput } from '../components/ui/customInput/CustomInput';
import { Button } from '../components/ui/buttons/Button';
import { Logo } from '../components/logo/Logo';
import { Notification } from '../components/notification/Notification';
import slideNotiAppear from '../components/notification/slide.module.css';

class Login extends React.Component {
  state = {
    error: false,
    email: '',
    password: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.messageError !== this.props.messageError) {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 2500);
    }
  }

  handelChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handelSubmit = event => {
    event.preventDefault();
    this.props.onLogin({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="logo">
          <Logo />
        </div>
        <form onSubmit={this.handelSubmit} className="form">
          <CustomInput
            type="text"
            name="email"
            value={email}
            handleChange={this.handelChange}
            isRequired={true}
            labelText={'E-mail'}
          />
          <CustomInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handelChange}
            isRequired={true}
            labelText={'Password'}
          />
          <Button type="submit" btnText={'Login'} />
        </form>

        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={slideNotiAppear}
          unmountOnExit
        >
          <Notification text={this.props.messageError} />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => ({
  messageError: state.auth.error,
});

const mapDispatchToProps = {
  onLogin: login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
