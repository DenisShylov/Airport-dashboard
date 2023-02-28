import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredData } from '../../../Redux/FlightSelectors';
import FlightsNotFound from '../Flights-not-found/FlightsNotFound';
import {
  TERMINAL_A_STYLES,
  TERMINAL_D_STYLES,
} from '../Flights-table/FlightsTable';

const FlightFiltered = () => {
  const filteredData = useSelector(getFilteredData);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filteredData.length === 0 ? (
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
            {filteredData.map((item) => (
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
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FlightFiltered;
