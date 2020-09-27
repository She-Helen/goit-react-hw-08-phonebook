import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/auth/authOperations';
import { CustomInput } from '../components/ui/customInput/CustomInput';
import { Button } from '../components/ui/buttons/Button';
import { Logo } from '../components/logo/Logo';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handelSubmit = event => {
    event.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({
      name: '',
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
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};
export default connect(null, mapDispatchToProps)(Login);
