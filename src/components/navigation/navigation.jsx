import React from 'react';
import '../landing/landing.css'

const Navigation = () => {
  return (
    <div>
        <aside className="sidebar">
      <div className="app-logo">Lando</div>
      <ul className="sidebar__nav">
        <li className="sidebar__nav-link sidebar__nav-link--active">
          <ion-icon name="car-sport-outline"></ion-icon><span>Cars</span>
        </li>
        <li className="sidebar__nav-link">
          <ion-icon name="calendar-outline"></ion-icon
          ><span>Reservations</span>
        </li>
        <li className="sidebar__nav-link">
          <ion-icon name="calendar-outline"></ion-icon
          ><span>Add car</span>
        </li><li className="sidebar__nav-link">
          <ion-icon name="calendar-outline"></ion-icon
          ><span>Delete car</span>
        </li>
      </ul>
      <ul className="sidebar__profile">
        <li>
          <ion-icon name="person-circle-outline"></ion-icon
          ><span>Profile</span>
        </li>
        <li>
          <ion-icon name="help-circle-outline"></ion-icon><span>Help</span>
        </li>
        <li><ion-icon name="book-outline"></ion-icon><span>About</span></li>
        <li>
          <ion-icon name="log-out-outline"></ion-icon><span>Logout</span>
        </li>
      </ul>
    </aside>
    </div>
  );
};

export default Navigation;