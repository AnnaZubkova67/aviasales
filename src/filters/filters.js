import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activeCheap, activeFast, activeOptions } from '../store/filtersSlice';

import styles from './filters.module.scss';

function Filters() {
  const dispatch = useDispatch();
  const { cheap, fast, options } = useSelector((state) => state.filter);
  return (
    <ul className={styles['criterion-list']}>
      <li className={styles['criterion-list__criterion']}>
        <button
          type="button"
          className={cheap ? styles['criterion-list__button--active'] : null}
          onClick={() => dispatch(activeCheap())}
        >
          Самый дешевый
        </button>
      </li>
      <li className={styles['criterion-list__criterion']}>
        <button
          type="button"
          className={fast ? styles['criterion-list__button--active'] : null}
          onClick={() => dispatch(activeFast())}
        >
          Самый быстрый
        </button>
      </li>
      <li className={styles['criterion-list__criterion']}>
        <button
          type="button"
          className={options ? styles['criterion-list__button--active'] : null}
          onClick={() => dispatch(activeOptions())}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  );
}

export default Filters;
