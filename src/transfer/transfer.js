import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { chooseAll, chooseOne } from '../store/transferSlice';

import styles from './transfer.module.scss';

function Transfer() {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.transfer.stateCheck);

  return (
    <div className={styles['filter-grop']}>
      <ul className={styles.transfer}>
        <li className={styles.transfer__header}>Количество пересадок</li>
        <li className={styles.transfer__li}>
          <input
            id="all"
            type="checkbox"
            className={styles.transfer__radio}
            checked={check[0]}
            onChange={() => {
              dispatch(chooseAll());
            }}
          />
          <label htmlFor="all" className={styles.transfer__label}>
            Все
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input
            id="no-transfer"
            type="checkbox"
            className={styles.transfer__radio}
            checked={check[1]}
            onChange={() => {
              dispatch(chooseOne({ index: 1 }));
            }}
          />
          <label htmlFor="no-transfer" className={styles.transfer__label}>
            Без пересадок
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input
            id="1-transfer"
            type="checkbox"
            className={styles.transfer__radio}
            checked={check[2]}
            onChange={() => dispatch(chooseOne({ index: 2 }))}
          />
          <label htmlFor="1-transfer" className={styles.transfer__label}>
            1 пересадка
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input
            id="2-transfer"
            type="checkbox"
            className={styles.transfer__radio}
            checked={check[3]}
            onChange={() => dispatch(chooseOne({ index: 3 }))}
          />
          <label htmlFor="2-transfer" className={styles.transfer__label}>
            2 пересадки
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input
            id="3-transfer"
            type="checkbox"
            className={styles.transfer__radio}
            checked={check[4]}
            onChange={() => dispatch(chooseOne({ index: 4 }))}
          />
          <label htmlFor="3-transfer" className={styles.transfer__label}>
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Transfer;
