import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getCurrentDate } from '../../Redux/FlightActions';
import { currentDateSelector } from '../../Redux/FlightSelectors';

import './Calendar.scss';

const Calendar = () => {
  const currentDate = useSelector(currentDateSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // Использовать при запросах на сервер
  const [startDate, setStartDate] = useState(
    new Date(searchParams.get('date')) || new Date(currentDate)
  );

  useEffect(() => {
    dispatch(getCurrentDate(startDate));
  }, [startDate]);

  const onChangeDate = useCallback((date) => {
    // setSearchParams({ ...searchParams, date });
    setStartDate(date);
    setSearchParams({ date });
    // dispatch(getCurrentDate(searchParams.get('date')));
    // dispatch(getCurrentDate(startDate));
  }, []);

  return <DatePicker selected={startDate} onChange={onChangeDate} inline />;
};

export default Calendar;
