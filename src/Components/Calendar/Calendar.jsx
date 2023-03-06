import React, { useCallback, useEffect } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchDataList, showCalendar } from '../../Redux/FlightActions';

import './Calendar.scss';

const Calendar = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    date: '11-10-2021'
  });
  const dispatch = useDispatch();
  // Использовать при запросах на сервер
  const dateParams = moment(searchParams.get('date')).format('YYYY-MM-DD');

  useEffect(() => {
    if (dateParams) {
      dispatch(fetchDataList(dateParams));
    }
  }, [dateParams]);

  const onChangeDate = useCallback((date) => {
    setSearchParams({
      search: searchParams.get('search'),
      date: moment(date).format('MM-DD-YYYY')
    });
    dispatch(showCalendar());
  }, []);

  return <DatePicker selected={new Date(dateParams)} onChange={onChangeDate} inline />;
};

export default Calendar;
