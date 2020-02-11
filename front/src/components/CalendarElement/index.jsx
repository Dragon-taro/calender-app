import React from 'react';

import './style.css';

import { Typography } from '@material-ui/core';
import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";
import dayjs from 'dayjs';

const CalenderElement = ({ day }) => {

    const today = dayjs();
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";


    const format = isFirstDay(day) ? "M月D日" : "D";

    const isToday = isSameDay(day, today);

    const todayStyle = isToday ? 'today' : ''

    return (
        <div className='element'>
            <Typography
                className='date'
                color='textColor'
                align='center'
                variant='caption'
                component='div'
            >
                <span className={todayStyle}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalenderElement;