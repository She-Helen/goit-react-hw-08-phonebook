import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import {
  getContactsSelector,
  getFilterSelector,
  getLoadingSelector,
} from '../../redux/contacts/contactsSelectors';
import { fetchContacts } from '../../redux/contacts/contactOperations';
import ContactForm from '../../components/contactForm/ContactForm';
import { ContactsList } from '../../components/contactList/ContactList';
import { Filter } from '../../components/filter/Filter';
import { Logo } from '../../components/logo/Logo';
import { CustomSpinner } from '../../components/ui/customSpiner/CustomSpiner';
import slideLogoAppear from './slideAppear.module.css';
import popFilterStyles from '../../components/filter/pop.module.css';

export class Phonebook extends Component {
  state = {
    isMounted: false,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      if (!prevState.isMounted) {
        this.setState({ isMounted: true });
      }
    }
  }

  render() {
    const contacts = this.props.contacts;
    const filter = this.props.filter !== '';
    const isMounted = this.state.isMounted;
    return (
      <div className="box">
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={slideLogoAppear}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>
        <ContactForm />

        <CSSTransition
          in={contacts.length > 1 || filter}
          timeout={250}
          classNames={popFilterStyles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        {isMounted && contacts.length < 1 && (
          <p className="Text">You have no contacts yet</p>
        )}
        <ContactsList />
        {this.props.isLoading && <CustomSpinner />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    filter: getFilterSelector(state),
    isLoading: getLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
