import moment from 'moment/moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FlightsListSelector, getValueIsFetching } from '../../../Redux/FlightSelectors';
import Spinner from '../../Spinner/Spinner';
import FlightsNotFound from '../Flights-not-found/FlightsNotFound';
import './FlightsTable.scss';

const TERMINAL_A_STYLES = {
  color: '#63c745',
  border: '1px solid #63c745'
};
const TERMINAL_D_STYLES = {
  color: '#1eb7ee',
  border: '1px solid #1eb7ee'
};

const FlightsTable = () => {
  const location = useLocation().pathname;
  const isFetching = useSelector(getValueIsFetching);
  const flightsList = useSelector(FlightsListSelector);
  if (isFetching) {
    return <Spinner />;
  }
  const condition =
    location === '/departures' ? flightsList.body.departure : flightsList.body.arrival;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {condition.length === 0 ? (
        <FlightsNotFound />
      ) : (
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
            {condition.map((item) => (
              <tr className="table__row">
                <td
                  style={item.term === 'A' ? TERMINAL_A_STYLES : TERMINAL_D_STYLES}
                  className="terminal">
                  {item.term}
                </td>
                <td>{moment(item.timeDepShedule).format('HH:mm')}</td>
                <td>
                  {location === '/departures'
                    ? item['airportToID.name']
                    : item['airportFromID.name']}
                </td>
                <td>
                  {location === '/departures'
                    ? `Вилетів о ${moment(item.actual).format('HH:mm')}`
                    : `Прибув ${moment(item.actual).format('HH:mm')}`}
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
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FlightsTable;
