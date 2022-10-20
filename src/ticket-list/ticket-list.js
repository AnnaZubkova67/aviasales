import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress, Alert } from 'antd';

import { fetchID, fetchTicket } from '../store/ticketSlice';
import Ticket from '../ticket';
import Filters from '../filters';

import styles from './ticket-list.module.scss';

function TicketList() {
  const dispatch = useDispatch();
  const { tickets, id, stop, error } = useSelector((state) => state.ticket);
  const { stateCheck } = useSelector((state) => state.transfer);
  const { cheap, fast, options } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchID());
  }, []);

  useEffect(() => {
    if (id && !stop) {
      dispatch(fetchTicket(id));
    }
  }, [id, tickets, stop]);

  const [amountTicket, setAmountTicket] = useState(5);
  useEffect(() => {
    setAmountTicket(5);
  }, [stateCheck, cheap, fast, options]);

  const filterTransfer = () => {
    const amountTransfer = [-1, 0, 1, 2, 3];
    const arrTicket = [];
    for (let i = 0; i <= stateCheck.length; i += 1) {
      if (stateCheck[i]) {
        // eslint-disable-next-line consistent-return
        const newTickets = tickets.filter((elem) => {
          if (
            elem.segments[0].stops.length === amountTransfer[i] &&
            elem.segments[1].stops.length === amountTransfer[i]
          ) {
            return elem;
          }
        });
        arrTicket.push(...newTickets);
      }
    }
    return arrTicket;
  };

  const filterCheap = (arr) => {
    if (arr !== undefined) {
      return arr.sort((prevTicket, nextTicket) => prevTicket.price - nextTicket.price);
    }
    return false;
  };

  const filterFast = (arr) => {
    if (arr !== undefined) {
      return arr.sort(
        (prevTicket, nextTicket) =>
          prevTicket.segments[0].duration +
          prevTicket.segments[1].duration -
          (nextTicket.segments[0].duration + nextTicket.segments[1].duration)
      );
    }
    return false;
  };

  const filterOptimal = (arr) => {
    if (arr !== undefined) {
      return arr.sort(
        (prevTicket, nextTicket) =>
          prevTicket.segments[0].duration +
          prevTicket.segments[1].duration +
          prevTicket.price -
          (nextTicket.segments[0].duration + nextTicket.segments[1].duration + nextTicket.price)
      );
    }
    return false;
  };

  const filter = () => {
    let ticketsArr = filterTransfer();
    if (cheap) {
      ticketsArr = filterCheap(ticketsArr);
    }
    if (fast) {
      ticketsArr = filterFast(ticketsArr);
    }
    if (options) {
      ticketsArr = filterOptimal(ticketsArr);
    }
    return ticketsArr;
  };

  const showMore = (
    <button type="button" className={styles['ticket-list__button']} onClick={() => setAmountTicket(amountTicket + 5)}>
      Показать еще 5 билетов!
    </button>
  );

  const errorElement = (
    <div className={styles['ticket-list__error']}>
      <Alert message="Error" description="Что-то пошло не так, невозможно загрузить данные :(" type="error" showIcon />
    </div>
  );

  const procentProgress = Math.trunc(100 / (10000 / tickets.length));

  return (
    <div className={styles['ticket-list']}>
      <Filters />
      <div className={stop || tickets.length === 0 ? styles['ticket-list__progress'] : null}>
        <Progress percent={procentProgress} showInfo={stop} />
      </div>
      {error ? errorElement : null}
      <ul>
        {tickets
          ? // eslint-disable-next-line consistent-return
            filter().map((elem, i) => {
              if (i <= amountTicket) {
                const { price, segments } = elem;
                return <Ticket price={price} key={Math.random()} segments={segments} />;
              }
            })
          : null}
      </ul>
      {filter().length > amountTicket || tickets.length === 0 ? showMore : null}
    </div>
  );
}

export default TicketList;
