import moment from 'moment/moment';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  FlightsListSelector,
  getValueIsFetching,
} from '../../../Redux/FlightSelectors';
import FlightsNotFound from '../Flights-not-found/FlightsNotFound';

import './FlightsTable.css';

const TERMINAL_A_STYLES = { color: '#63c745', border: '1px solid #63c745' };
const TERMINAL_D_STYLES = { color: '#1eb7ee', border: '1px solid #1eb7ee' };

const FlightsTable = () => {
  const isFetching = useSelector(getValueIsFetching);
  const flightsList = useSelector(FlightsListSelector);

  console.log(flightsList);

  if (isFetching) {
    return <div>Spinner</div>;
  }

  return (
    <table className="flights-list-container">
      <thead>
        <tr className="table__header">
          <th>Термінал</th>
          <th>Розклад</th>
          <th> Напрямок</th>
          <th>Статус</th>
          <th>Авіакомпанія</th>
          <th>Рейс</th>
        </tr>
      </thead>
      <tbody>
        {flightsList?.body.departure.length === 0 ? (
          <FlightsNotFound />
        ) : (
          flightsList?.body.departure.map((item) => (
            <tr className="table__row">
              <td
                style={
                  item.term === 'A' ? TERMINAL_A_STYLES : TERMINAL_D_STYLES
                }
                className="terminal"
              >
                {item.term}
              </td>
              <td>{moment(item.timeDepShedule).format('HH:mm')}</td>
              <td>{item['airportToID.name']}</td>
              <td>
                {item.status === 'CX'
                  ? 'Скасовано'
                  : `Вилетів о ${moment(item.actual).format('HH:mm')}`}
              </td>
              <td>
                <img
                  style={{ width: '40px' }}
                  src={`https://api.iev.aero/${item.logo}`}
                  alt="logo"
                />
                {item.airline.en.name}
              </td>
              <td>{item.codeShareData[0].codeShare}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default FlightsTable;
