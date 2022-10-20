import React, { useState } from 'react';
import { Alert, Spin } from 'antd';
import { useSelector } from 'react-redux';

import Transfer from '../transfer';
import TicketList from '../ticket-list';
import NetworkState from '../network-state/network-state';

import logo from './logo.svg';
import styles from './app.module.scss';

import 'antd/dist/antd.css';

function App() {
  const [network, setNetwork] = useState(true);
  const { tickets, error } = useSelector((state) => state.ticket);

  const onNetworkState = () => {
    if (network) {
      setNetwork(false);
    } else {
      setNetwork(true);
    }
  };

  const networkElement = (
    <div className={styles.aviasales__error}>
      <Alert message="Error" description="Вы не подключены к сети :(" type="error" showIcon />
    </div>
  );
  const networkMessage = !network ? networkElement : null;

  return (
    <Spin spinning={!tickets.length && !error} delay={500} size="large">
      <NetworkState onNetworkState={onNetworkState} />
      {networkMessage}
      <section className={styles.aviasales}>
        <img src={logo} alt="logo" className={styles.aviasales__logo} />
        <div className={styles.aviasales__content}>
          <Transfer />
          <TicketList network={network} />
        </div>
      </section>
    </Spin>
  );
}

export default App;
