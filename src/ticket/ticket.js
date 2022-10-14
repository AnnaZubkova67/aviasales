import React from 'react';

import styles from './ticket.module.scss';
import ticketImage from './airlines.svg';

function Ticket() {
  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__header}>
        <p className={styles.ticket__count}>13 400p</p>
        <img src={ticketImage} className={styles.ticket__img} alt="logoTicket" />
      </div>
      <div className={styles.ticket__characteristic}>
        <div className={styles.ticket__direction}>
          <p className={styles.ticket__path}>MOW – HKT</p>
          <p className={styles.ticket__time}>10:45 – 08:00</p>
          <p className={styles.ticket__path}>MOW – HKT</p>
          <p className={styles.ticket__time}>11:20 – 00:50</p>
        </div>
        <div className={styles.ticket__direction}>
          <p className={styles.ticket__path}>В пути</p>
          <p className={styles.ticket__time}>21ч 15м</p>
          <p className={styles.ticket__path}>В пути</p>
          <p className={styles.ticket__time}>13ч 30м</p>
        </div>
        <div className={styles.ticket__direction}>
          <p className={styles.ticket__path}>2 пересадки</p>
          <p className={styles.ticket__time}>HKG, JNB</p>
          <p className={styles.ticket__path}>1 пересадка</p>
          <p className={styles.ticket__time}>HKG</p>
        </div>
      </div>
    </li>
  );
}

export default Ticket;
