import React from 'react';

import styles from './styles.module.scss';

export const BookingForm = () => (
  <div className={styles.bookingForm}>
    <div className={styles.field}>
      <label htmlFor="location">
        <i className="fas fa-map-marker-alt" />
        {' '}
        Location
      </label>
      <select id="location">
        <option>Abuja</option>
        <option>Lagos</option>
        <option>Kano</option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="roomType">
        <i className="fas fa-bed" />
        {' '}
        Room type
      </label>
      <select id="roomType">
        <option>Standard</option>
        <option>Deluxe</option>
        <option>Suite</option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="person">
        <i className="fas fa-user" />
        {' '}
        Person
      </label>
      <select id="person">
        <option>01</option>
        <option>02</option>
        <option>03</option>
      </select>
    </div>
    <div className={styles.field}>
      <label htmlFor="checkIn">
        <i className="fas fa-calendar-alt" />
        {' '}
        Check in
      </label>
      <input type="date" id="checkIn" />
    </div>
    <div className={styles.field}>
      <label htmlFor="checkOut">
        <i className="fas fa-calendar-alt" />
        {' '}
        Check out
      </label>
      <input type="date" id="checkOut" />
    </div>
    <div className={styles.field}>
      <button type="submit">Book Now</button>
    </div>
  </div>
);
