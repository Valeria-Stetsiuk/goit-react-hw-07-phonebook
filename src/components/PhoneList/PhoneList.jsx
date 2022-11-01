import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  selectRenderContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import s from './PhoneList.module.css';

export const PhoneList = () => {
  const renderContacts = useSelector(selectRenderContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  return (
    <>
      {error && <p>Sorry!The action was not completed, try again later.</p>}
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <span className={s.phoneName}>{name} :</span>
                {number}
                <button
                  className={s.buttonDelete}
                  type="button"
                  disabled={isLoading}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
