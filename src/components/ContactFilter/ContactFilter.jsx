import React from 'react';
import { useDispatch } from 'react-redux';
import { onChange } from 'redux/contactFilterSlice';
import s from '../ContactFilter/ContactFilter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterContactsByName = e => {
    const { value } = e.target;
    dispatch(onChange(value));
  };
  return (
    <>
      <label className={s.label}>
        <span className={s.msgFilter}>Find contact by name</span>
        <input
          type="text"
          onChange={handleFilterContactsByName}
          className={s.inputFilter}
        />
      </label>
    </>
  );
};
