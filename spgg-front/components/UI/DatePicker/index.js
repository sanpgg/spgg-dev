/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import {
  Calendar,
  CalendarHeader,
  DateIcon,
  DatePickerContainer,
  DatePickerStyled,
  DayHeader,
  InputDate,
  MonthYear,
  Next,
  Previous,
  WeekDay,
  Day
} from './styles';
import Icon from 'components/UI/Icon';
import Input from 'components/UI/Input';
import useOnClickOutside from 'hooks/useOutsideClick';

const weekdays = [
  'D',
  'L',
  'M',
  'M',
  'J',
  'V',
  'S'
];

function DatePickerSelector(props) {
  const [tempValue, setTempValue] = useState(new Date());

  const clickPreviousMonth = () => {
    setTempValue(moment(tempValue).subtract(1, 'month').toDate());
  };

  const clickNextMonth = () => {
    setTempValue(moment(tempValue).add(1, 'month').toDate());
  };

  const clickDay = (e) => {
    let oldDate = tempValue;
    let dataDate = e.currentTarget.getAttribute('data-day');
    let dataMonth = e.currentTarget.getAttribute('data-month');
    let newDate = moment(oldDate).month(dataMonth).date(dataDate).toDate();
    setTempValue(newDate);

    if (props.onChangeDate) {
      props.onChangeDate(oldDate, newDate);
    }
    if (props.hideSelector) {
      props.hideSelector();
    }
  };

  function renderDaysInMonth() {
    let { currentValue, value } = props;
    let selectedDate = moment(currentValue || value);
    let selectedTempDate = moment(tempValue);
    // eslint-disable-next-line no-unused-vars
    let daysInMonth = moment(tempValue).daysInMonth();
    // console.log(daysInMonth, 'daysInMonth');
    let startDate = moment(tempValue).date(1);
    let j = 0;
    let i = 0;

    if (startDate.days() !== 0) {
      startDate.subtract(startDate.days(), 'days');
    }
    let rows = [];
    let daysIndex = 0;
    for (j = 0; j < 5; j++) {
      let row = [];

      for (i = 0; i < 7; i++) {
        let className = '';

        // eslint-disable-next-line no-lonely-if
        if (startDate.month() !== selectedTempDate.month()) {
          className += 'notInMonth';
        } else if (currentValue) {
          // console.log(startDate.date(), selectedDate.date());
          if (startDate.date() === selectedDate.date() && startDate.month() === selectedDate.month()) {
            className += 'selected';
          }
        } else if (startDate.date() === selectedDate.date() && startDate.month() === selectedDate.month()) {
          className += 'selected';
        }

        row.push(<Day onClick={clickDay} className={className} data-day={startDate.date()} data-month={startDate.month()}>{startDate.date()}</Day>);
        // console.log(className, 'current class for item');
        startDate.add(1, 'days');
      }

      rows.push(row);
      // eslint-disable-next-line no-unused-vars
      daysIndex++;
    }
    return rows.map((row) => (
      <tr>
        {row.map((item) => item)}
      </tr>
    ));
  }

  return (
    <DatePickerContainer>
      <Calendar>
        <CalendarHeader>
          <Previous onClick={clickPreviousMonth}>
            <Icon
              className="gray"
              icon="bx bx-left-arrow-alt"
              onClick={clickPreviousMonth}
            />
          </Previous>
          <MonthYear colSpan="5">{moment(tempValue).format('MMMM YYYY')}</MonthYear>
          <Next onClick={clickNextMonth}>
            <Icon
              className="gray"
              icon="bx bx-right-arrow-alt"
              onClick={clickPreviousMonth}
            />
          </Next>
        </CalendarHeader>
        <DayHeader>
          {weekdays.map((day) => (
            <WeekDay>{day}</WeekDay>
          ))}
        </DayHeader>
        { renderDaysInMonth() }
      </Calendar>
    </DatePickerContainer>
  );
}

function DatePickerLabel(props) {
  return (
    <InputDate>
      <DateIcon>
        <Icon
          size="date"
          className="gray"
          icon="bx bx-calendar-alt"
          onClick={props.toggleSelector}
        />
      </DateIcon>
      <Input
        size="medium"
        readOnly
        onClick={props.toggleSelector}
        value={moment(props.currentValue).format('DD/MM/YYYY')}
      />
    </InputDate>
  );
}

function DatePicker({ value, onChange }) {
  const [currentValue, setCurrentValue] = useState('');
  const [isSelectorActive, setIsSelectorActive] = useState(false);

  const onChangeShowSelector = (value) => {
    setIsSelectorActive(value);
  };

  const toggleSelector = () => {
    onChangeShowSelector(!isSelectorActive);
  };

  const showSelector = () => {
    onChangeShowSelector(true);
  };

  const hideSelector = () => {
    onChangeShowSelector(false);
  };

  const onChangeDate = (oldDate, newDate) => {
    setCurrentValue(newDate);
    onChange(newDate);
  };

  let childProps = {
    currentValue, isSelectorActive, onChangeDate, showSelector, hideSelector, toggleSelector
  };

  const datePicker = useRef();

  useOnClickOutside(datePicker, () => {
    setIsSelectorActive(false);
  });

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    } else {
      setCurrentValue(new Date());
    }
  }, [value]);

  return (
    <DatePickerStyled
      ref={datePicker}
    >
      <DatePickerLabel {...childProps} />
      {isSelectorActive && (
        <DatePickerSelector {...childProps} />
      )}
    </DatePickerStyled>
  );
}

export default DatePicker;
