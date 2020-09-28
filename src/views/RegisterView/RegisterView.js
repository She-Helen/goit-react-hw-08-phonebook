import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { CustomInput } from '../../components/ui/customInput/CustomInput';
import { Button } from '../../components/ui/buttons/Button';
import { register } from '../../redux/auth/authOperations';
import { Logo } from '../../components/logo/Logo';
import { Notification } from '../../components/notification/Notification';
import slideNotiAppear from '../../components/notification/slide.module.css';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: false,
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
    this.props.onRegister({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <div className="logo">
          <Logo />
        </div>

        <form onSubmit={this.handelSubmit} className="form">
          <CustomInput
            type="text"
            name="name"
            value={name}
            handleChange={this.handelChange}
            isRequired={true}
            labelText={'Nickname'}
          />
          <CustomInput
            type="text"
            name="email"
            value={email}
            handleChange={this.handelChange}
            labelText="E-mail"
            isRequired={true}
          />
          <CustomInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handelChange}
            labelText="Password"
            isRequired={true}
          />

          <Button type="submit" btnText={'Sign Up'} />
        </form>
        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={slideNotiAppear}
          unmountOnExit
        >
          <Notification text={this.props.messageError} />
        </CSSTransition>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  messageError: state.auth.error,
});
const mapDispatchToProps = {
  onRegister: register,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
