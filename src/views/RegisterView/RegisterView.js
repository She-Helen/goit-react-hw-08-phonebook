import React from 'react';
import { connect } from 'react-redux';
import { CustomInput } from '../../components/ui/customInput/CustomInput';
import { Button } from '../../components/ui/buttons/Button';
import { register } from '../../redux/auth/authOperations';
import { Logo } from '../../components/logo/Logo';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handelSubmit = event => {
    event.preventDefault();
    this.props.onRegister({ ...this.state });
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
      </div>
    );
  }
}
const mapDispatchToProps = {
  onRegister: register,
};
export default connect(null, mapDispatchToProps)(Register);
