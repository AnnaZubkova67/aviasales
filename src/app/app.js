import React from 'react';

import Transfer from '../transfer';
import TicketList from '../ticket-list';

import logo from './logo.svg';
import styles from './app.module.scss';

function App() {
  return (
    <section className={styles.aviasales}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.content}>
        <Transfer />
        <TicketList />
      </div>
    </section>
  );
}

export default App;
