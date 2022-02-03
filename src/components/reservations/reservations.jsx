import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations, removeReservation } from '../../store/reservations-reducer';
import reservationApi, { deleteReservation } from '../../api/reservations';
import { fetchCars } from '../../store/action';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservationsReducer, userReducer, carsReducer } = useSelector(
    (state) => state,
  );

  useEffect(() => {
    dispatch(fetchCars());
    const { user_id: id } = userReducer.user;
    reservationApi(dispatch, getReservations, id);
  }, []);

  const handleDelete = (rerveId) => {
    const { user_id: id } = userReducer.user;
    deleteReservation(dispatch, removeReservation, id, rerveId);
  };

  const getCar = (carId) => carsReducer.cars.find((car) => car.id === carId) || {};
  const filteredReservations = reservationsReducer.filter((reservation) => typeof reservation.car === 'number');
  console.log(filteredReservations);

  return (
    <section>
      <h2>My Reservations</h2>
      <ul>
        {filteredReservations.map((reservation) => (
          <li key={reservation.id}>
            <div>
              <img
                src={getCar(reservation.car).image || null}
                alt="reservation"
              />
              <div/>
            </div>
            <div>
              <h3>
                {getCar(reservation.car).title || null}
              </h3>
              <p>{getCar(reservation.car).car_description}</p>
              <ul>
                <li>
                  <span>Rent duration: </span>
                  {reservation.rent_duration}
                </li>
                <li>
                  <span>Start day: </span>
                  {reservation.rent_start_date}
                </li>
                <li>
                  <span>Total price: </span>
                  {getCar(reservation.car).price
                    * reservation.rent_duration
                    - (getCar(reservation.car).price
                      * reservation.rent_duration
                      * getCar(reservation.car).discount)
                      / 100}
                </li>
              </ul>
              <button
                type="button"
                onClick={() => handleDelete(reservation.id)}
              >
                Cancel Reservation
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reservations;