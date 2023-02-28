import moment from 'moment/moment';
import React, { useCallback, useEffect } from 'react';
import './FlightsDates.css';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../../Calendar/Calendar';
import {
  currentDateSelector,
  showCalendarSelector,
} from '../../../Redux/FlightSelectors';
import {
  showCalendar,
  fetchDataList,
  getCurrentDate,
} from '../../../Redux/FlightActions';

const FORMAT = 'DD/MM';
const YESTERDAY = moment().subtract(1, 'day').format(FORMAT);
const TODAY = moment().format(FORMAT);
const TOMORROW = moment().add(1, 'day').format(FORMAT);

const FlightsDates = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(currentDateSelector);
  const visibleCalendar = useSelector(showCalendarSelector);
  // const [showCalendar, setShowCalendar] = useState(false);
  const onDatePicker = useCallback(() => dispatch(showCalendar()));
  const SELECTED_CURRENT_DATE = useSelector(currentDateSelector);

  useEffect(() => {
    dispatch(fetchDataList(moment(SELECTED_CURRENT_DATE).format('DD-MM-yyyy')));
  }, [SELECTED_CURRENT_DATE]);

  const onSetDay = useCallback((e) => {
    if (e.target.dataset.day === 'yesterday') {
      dispatch(fetchDataList(moment().subtract(1, 'day').format('DD-MM-yyyy')));
      dispatch(getCurrentDate(moment().subtract(1, 'day').format()));
    }
    if (e.target.dataset.day === 'today') {
      dispatch(fetchDataList(moment().format('DD-MM-yyyy')));
      dispatch(getCurrentDate(moment().format()));
    }
    if (e.target.dataset.day === 'tomorrow') {
      dispatch(fetchDataList(moment().add(1, 'day').format('DD-MM-yyyy')));
      dispatch(getCurrentDate(moment().add(1, 'day').format()));
    }
  });

  return (
    <>
      <div className="dates-container">
        <div className="dates-img">
          <span className="dates-date">
            {moment(currentDate).format(FORMAT)}
          </span>
          <img
            onClick={onDatePicker}
            className="dates-img__calendar"
            src={`${process.env.PUBLIC_URL}/calendar.svg`}
            alt="calendar"
          />
        </div>

        <div className="dates_wrapper" onClick={onSetDay}>
          <div
            className={
              currentDate === moment().subtract(1, 'day').format()
                ? 'date yesterday selected-day'
                : 'date yesterday '
            }
            data-day="yesterday"
          >
            <span className="date-num">{YESTERDAY}</span>
            <span className="date-title">ВЧОРА</span>
          </div>
          <div
            className={
              currentDate === moment().format() ? 'date selected-day' : 'date'
            }
            onClick={onSetDay}
            data-day="today"
          >
            <span className="date-num">{TODAY}</span>
            <span className="date-title">СЬОГОДНІ</span>
          </div>
          <div
            className={
              currentDate === moment().add(1, 'day').format()
                ? 'date selected-day'
                : 'date'
            }
            onClick={onSetDay}
            data-day="tomorrow"
          >
            <span className="date-num">{TOMORROW}</span>
            <span className="date-title">Завтра</span>
          </div>
        </div>
      </div>
      {visibleCalendar && <Calendar />}
    </>
  );
};

export default FlightsDates;
