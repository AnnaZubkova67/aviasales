import React from 'react';

import styles from './transfer.module.scss';

function Transfer() {
  return (
    <div className={styles['filter-grop']}>
      <ul className={styles.transfer}>
        <li className={styles.transfer__header}>Количество пересадок</li>
        <li className={styles.transfer__li}>
          <input id="radio-1" type="radio" className={styles.transfer__radio} />
          <label htmlFor="radio-1" className={styles.transfer__label}>
            Все
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input id="radio-2" type="radio" className={styles.transfer__radio} />
          <label htmlFor="radio-2" className={styles.transfer__label}>
            Без пересадок
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input id="radio-3" type="radio" className={styles.transfer__radio} />
          <label htmlFor="radio-3" className={styles.transfer__label}>
            1 пересадка
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input id="radio-4" type="radio" className={styles.transfer__radio} />
          <label htmlFor="radio-4" className={styles.transfer__label}>
            2 пересадки
          </label>
        </li>
        <li className={styles.transfer__li}>
          <input id="radio-5" type="radio" className={styles.transfer__radio} />
          <label htmlFor="radio-5" className={styles.transfer__label}>
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Transfer;
