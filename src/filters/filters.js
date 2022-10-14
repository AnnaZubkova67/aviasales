import React from 'react';

import styles from './filters.module.scss';

function Filters() {
  return (
    <ul className={styles['criterion-list']}>
      <li className={styles['criterion-list__criterion']}>
        <input id="radio-1" type="radio" defaultChecked />
        <label htmlFor="radio-1">Самый дешевый</label>
      </li>
      <li className={styles['criterion-list__criterion']}>
        <input id="radio-2" type="radio" />
        <label htmlFor="radio-2">Самый быстрый</label>
      </li>
      <li className={styles['criterion-list__criterion']}>
        <input id="radio-3" type="radio" />
        <label htmlFor="radio-3">Оптимальный</label>
      </li>
    </ul>
  );
}

export default Filters;
