import React from 'react';
import { connect } from 'react-redux';
import { getContactsSelector } from '../../redux/contacts/contactsSelectors';
import { CSSTransition } from 'react-transition-group';
import { addContact } from '../../redux/contacts/contactOperations';
import { Button } from '../ui/buttons/Button';
import { CustomInput } from '../ui/customInput/CustomInput';
import { Notification } from '../notification/Notification';
import slideNotiAppear from '../notification/slide.module.css';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
    error: false,
    errorMsg: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (this.state.name) {
      if (
        this.props.contacts.find(contact => contact.name === this.state.name)
      ) {
        this.setState({
          error: true,
          name: '',
          number: '',
          errorMsg: 'Contact is already exists!!!',
        });
        setTimeout(() => {
          this.setState({ error: false, errorMsg: '' });
        }, 2500);
      } else {
        const contact = {
          name: this.state.name,
          number: this.state.number,
        };
        this.props.addContact(contact);
        this.setState({ name: '', number: '' });
      }
    } else {
      this.setState({ error: true, errorMsg: 'Please, enter the name!' });
      setTimeout(() => {
        this.setState({ error: false, errorMsg: '' });
      }, 2500);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitForm} className={styles.form}>
          <CustomInput
            labelText="Name"
            name="name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
            isRequired={true}
          />
          <CustomInput
            labelText="Number"
            name="number"
            type="tel"
            value={this.state.number}
            handleChange={this.handleChange}
            isRequired={true}
          />

          <Button type="submit" btnText={'Add contact'} />
        </form>
        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={slideNotiAppear}
          unmountOnExit
        >
          <Notification text={this.state.errorMsg} />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: getContactsSelector(state) };
};

const mapDispatchToProps = {
  addContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
