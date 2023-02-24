import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate } from '../../Redux/FlightActions';
import { currentDateSelector } from '../../Redux/FlightSelectors';

import './Calendar.scss';

const Calendar = () => {
  const currentDate = useSelector(currentDateSelector);
  const dispatch = useDispatch();
  // Использовать при запросах на сервер
  const [startDate, setStartDate] = useState(currentDate);
  useEffect(() => {
    dispatch(getCurrentDate(startDate));
  }, [startDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
    />
  );
};

export default Calendar;
