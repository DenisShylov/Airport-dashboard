import moment from 'moment/moment';
import React, { useCallback, useEffect, useState } from 'react';
import './FlightsDates.css';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../../Calendar/Calendar';
import { currentDateSelector } from '../../../Redux/FlightSelectors';
import { fetchDataList } from '../../../Redux/FlightActions';

const FORMAT = 'DD/MM';
const YESTERDAY = moment().subtract(1, 'day').format(FORMAT);
const TODAY = moment().format(FORMAT);
const TOMORROW = moment().add(1, 'day').format(FORMAT);

const FlightsDates = () => {
  const currentDate = useSelector(currentDateSelector);
  const [showCalendar, setShowCalendar] = useState(false);
  const onDatePicker = useCallback(() => setShowCalendar(!showCalendar));
  const SELECTED_CURRENT_DATE = useSelector(currentDateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataList(moment(SELECTED_CURRENT_DATE).format('DD-MM-yyyy')));
  }, [SELECTED_CURRENT_DATE]);

  const onSetDay = useCallback((e) => {
    if (e.target.classList.contains('date')) {
      e.target.classList.toggle('selected-day');
    } else {
      return '';
    }
    return '';
  });
  return (
    <>
      <div className="dates-container">
        <div className="dates-img">
          <span className="dates-date">
            {`${moment(currentDate).format(FORMAT)}`}
          </span>
          <img
            onClick={onDatePicker}
            className="dates-img__calendar"
            src={`${process.env.PUBLIC_URL}/calendar.svg`}
            alt="calendar"
          />
        </div>

        <div className="dates_wrapper" onClick={onSetDay}>
          <div className="date yesterday" data-day="yesterday">
            <span className="date-num">{YESTERDAY}</span>
            <span className="date-title">ВЧОРА</span>
          </div>
          <div className="date today" data-day="today">
            <span className="date-num">{TODAY}</span>
            <span className="date-title">СЬОГОДНІ</span>
          </div>
          <div className="date tomorrow" data-day="tomorrow">
            <span className="date-num">{TOMORROW}</span>
            <span className="date-title">Завтра</span>
          </div>
        </div>
      </div>
      {showCalendar && <Calendar />}
    </>
  );
};

export default FlightsDates;
