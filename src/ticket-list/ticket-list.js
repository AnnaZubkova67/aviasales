import React from 'react';

import Ticket from '../ticket';
import Filters from '../filters';

import styles from './ticket-list.module.scss';

function TicketList() {
  return (
    <div className={styles['ticket-list']}>
      <Filters />
      <ul>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <button type="button" className={styles.button}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

export default TicketList;
