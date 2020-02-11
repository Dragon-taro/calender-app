import React from "react";

import { GridList, Typography } from '@material-ui/core';
import './style.css';
import CalenderElement from '../CalendarElement';

import { createCalendar } from '../../services/calendar';

const calendar = createCalendar();

const days = ['日', '月', '火', '水', '木', '金', '土'];

const CalenderBoard = () => {
    return (
        <div className='container'>
          <GridList className='grid' cols={7} spacing={0} cellHeight="auto">
            {days.map(d => (
                <li key={d}>
                    <Typography
                        className='days'
                        color='textSecondary'
                        align='center'
                        variant='caption'
                        component='div'
                    >
                        {d}
                    </Typography>
                </li>
            ))}
            {calendar.map(c => (
              <li key={c.toISOString()}>
                  <CalenderElement day={c}/>
              </li>
            ))}
          </GridList>
        </div>
    );
};

export default CalenderBoard;