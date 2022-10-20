import React from 'react';

import styles from './ticket.module.scss';

function Ticket({ price, segments, carrier }) {
  const [there, back] = segments;

  const transfer = (amount) => {
    if (amount === 0) {
      return 'Без пересадок';
    }
    if (amount === 1) {
      return '1 пересадка';
    }
    if (amount >= 2 && amount < 5) {
      return `${amount} пересадки`;
    }
    if (amount >= 5 && amount <= 10) {
      return `${amount} пересадок`;
    }
    return false;
  };

  const travelTime = (min) => {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  };

  const padTime = (time) => time.toString().padStart(2, '0');

  const time = (direction) => {
    const departureTimeHours = new Date(direction.date).getHours();
    const departureTimeMin = new Date(direction.date).getMinutes();
    let timeInMinutes = departureTimeHours * 60 + departureTimeMin;
    timeInMinutes += direction.duration;
    const arrivalTimeMin = timeInMinutes % 60;
    let arrivalTimeHours = Math.trunc(timeInMinutes / 60);
    while (arrivalTimeHours > 24) {
      arrivalTimeHours -= 24;
    }
    return `${padTime(departureTimeHours)}:${padTime(departureTimeMin)} - ${padTime(arrivalTimeHours)}:${padTime(
      arrivalTimeMin
    )}`;
  };
  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__header}>
        <p className={styles.ticket__count}>{`${price} p`}</p>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} className={styles.ticket__img} alt="logoTicket" />
      </div>
      <div className={styles.ticket__characteristic}>
        <div className={styles.ticket__direction}>
          <p className={styles.ticket__description}>{`${there.origin}-${there.destination}`}</p>
          <p className={styles.ticket__value}>{time(there)}</p>
          <p className={styles.ticket__description}>{`${back.origin}-${back.destination}`}</p>
          <p className={styles.ticket__value}>{time(back)}</p>
        </div>
        <div className={styles.ticket__direction}>
          <p className={styles.ticket__description}>В пути</p>
          <p className={styles.ticket__value}>{travelTime(there.duration)}</p>
          <p className={styles.ticket__description}>В пути</p>
          <p className={styles.ticket__value}>{travelTime(back.duration)}</p>
        </div>
        <div className={styles.ticket__direction}>
          <p className={styles.ticket__description}>{transfer(there.stops.length)}</p>
          <p className={styles.ticket__value}>{there.stops.length ? `${there.stops.join(', ')}` : ' '}</p>
          <p className={styles.ticket__description}>{transfer(back.stops.length)}</p>
          <p className={styles.ticket__value}>{back.stops.length ? `${there.stops.join(', ')}` : ' '}</p>
        </div>
      </div>
    </li>
  );
}

export default Ticket;
