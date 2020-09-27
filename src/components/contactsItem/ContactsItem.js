import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactOperations';
import { ButtonRemove } from '../ui/buttons/ButtonRemove';
import styles from './ContactsItem.module.css';

function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(removeContact(id));
  const color = () =>
    `rgb(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255,
    )},${Math.round(Math.random() * 255)} )`;

  return (
    <li className={styles.ListItem}>
      <div style={{ backgroundColor: color() }} className={styles.dot}></div>
      <span className={styles.Text}>{name}: </span>
      <span className={styles.Number}>{number}</span>
      <ButtonRemove type="button" id={id} onClick={handleClick} />
    </li>
  );
}
export default ContactsItem;

// // вариант без хуков
// function ContactsItem(props) {
//   return (
//     <li className={styles.ListItem}>
//       <span className={styles.Text}>{props.contact.name}: </span>
//       <span className={styles.Number}>{props.contact.number}</span>
//       <ButtonRemove type="button" id={props.id} onClick={props.onRemove} />
//     </li>
//   );
// }
// const mapStateToProps = state => {
//   return state;
// };

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onRemove: () => dispatch(removeContact(ownProps.contact.id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);
