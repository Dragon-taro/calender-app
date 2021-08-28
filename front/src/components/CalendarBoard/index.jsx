import React from "react";
import { GridList } from "@material-ui/core";

const calendar = [
    "29",
    "30",
    "10月1日",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "11月1日",
    "2"
];

const CalendarBoard = () => {
    return (
        <div>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {calendar.map(c => (
                    <li>{c}</li>
                ))}
            </GridList>
        </div>
    );
};

export default CalendarBoard;