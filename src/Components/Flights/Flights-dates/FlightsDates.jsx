import moment from 'moment/moment';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Calendar from '../../Calendar/Calendar';
import { showCalendarSelector } from '../../../Redux/FlightSelectors';
import { showCalendar, fetchDataList } from '../../../Redux/FlightActions';
import './FlightsDates.scss';

const FORMAT = 'DD/MM';
const YESTERDAY = moment().subtract(1, 'day').format(FORMAT);
const TODAY = moment().format(FORMAT);
const TOMORROW = moment().add(1, 'day').format(FORMAT);

const FlightsDates = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({ date: '11-10-2021' });

  const visibleCalendar = useSelector(showCalendarSelector);

  const onDatePicker = useCallback(() => {
    dispatch(showCalendar());
  }, []);

  const dateParams = searchParams.get('date');
  const dateTopImg = moment(dateParams).format();

  useEffect(() => {
    dispatch(fetchDataList(moment(dateParams).format('DD-MM-YYYY')));
  }, [dateParams]);

  const onSetDay = useCallback((e) => {
    if (e.target.dataset.day === 'yesterday') {
      setSearchParams({
        search: searchParams.get('search'),
        date: moment().subtract(1, 'day').format('MM-DD-YYYY')
      });
      dispatch(
        fetchDataList(moment().subtract(1, 'day').format('DD-MM-YYYY') || searchParams.get('date'))
      );
    }
    if (e.target.dataset.day === 'today') {
      setSearchParams({ search: searchParams.get('search'), date: moment().format('MM-DD-YYYY') });
      dispatch(fetchDataList(moment().format('DD-MM-YYYY')));
    }
    if (e.target.dataset.day === 'tomorrow') {
      setSearchParams({
        search: searchParams.get('search'),
        date: moment().add(1, 'day').format('MM-DD-YYYY')
      });
      dispatch(fetchDataList(moment().add(1, 'day').format('DD-MM-YYYY')));
    }
  });

  return (
    <>
      <div className="dates-container">
        <div className="dates-img">
          <span className="dates-date">
            {!searchParams.get('date')
              ? moment().format('MM/DD')
              : moment(dateTopImg).format('MM/DD')}
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
              dateParams === moment().subtract(1, 'day').format('MM-DD-YYYY')
                ? 'date yesterday selected-day'
                : 'date yesterday '
            }
            data-day="yesterday">
            <span className="date-num">{YESTERDAY}</span>
            <span className="date-title">ВЧОРА</span>
          </div>
          <div
            className={dateParams === moment().format('MM-DD-YYYY') ? 'date selected-day' : 'date'}
            onClick={onSetDay}
            data-day="today">
            <span className="date-num">{TODAY}</span>
            <span className="date-title">СЬОГОДНІ</span>
          </div>
          <div
            className={
              dateParams === moment().add(1, 'day').format('MM-DD-YYYY')
                ? 'date selected-day'
                : 'date'
            }
            onClick={onSetDay}
            data-day="tomorrow">
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
