import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => (
  <DatePicker placeholderText={moment().format('DD-MM-YYYY')} />
);

export default Calendar;
