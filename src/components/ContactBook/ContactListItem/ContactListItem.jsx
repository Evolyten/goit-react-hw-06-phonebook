import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeContacts } from 'redux/slices/slice';

export function ContactListItem({ user }) {
  const dispatch = useDispatch();

  const { id, name, number } = user;
  return (
    <li className={css.user_item}>
      {name}: <span>{number}</span>
      <button
        className={css.user_delete_btn}
        onClick={() => dispatch(removeContacts(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  user: PropTypes.object,
};
