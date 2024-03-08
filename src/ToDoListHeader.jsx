import { useState } from "react";

function ToDoListHeader() {

    const date = new Date();
    const day = date.getDate();

    let month = date.getMonth();

    if (month == 0) {
        month = "JAN";
    } else if (month == 1) {
        month = "FEB"
    } else if (month == 2) {
        month = "MAR"
    } else if (month == 3) {
        month = "APR"
    } else if (month == 4) {
        month = "MAY"
    } else if (month == 5) {
        month = "JUN"
    } else if (month == 6) {
        month = "JUL"
    } else if (month == 7) {
        month = "AUG"
    } else if (month == 8) {
        month = "SEP"
    } else if (month == 9) {
        month = "OCT"
    } else if (month == 10) {
        month = "NOV"
    } else {
        month = "DEC"
    };

    const year = date.getFullYear();

    let weekday = date.getDay();

    if (weekday == 0) {
        weekday = "sunday"
    } else if (weekday == 1) {
        weekday = "monday"
    } else if (weekday == 2) {
        weekday = "tuesday"
    } else if (weekday == 3) {
        weekday = "wednesday"
    } else if (weekday == 4) {
        weekday = "thursday"
    } else if (weekday == 5) {
        weekday = "friday"
    } else {
        weekday = "saturday"
    };

    return (
        <div className="header-container">
            <div className="header-date">
                <h1>{day}</h1>
                <div className="header-month-year">
                    <p>{month}</p>
                    <p>{year}</p>
                </div>
            </div>
            <div className="header-dayOfTheWeek">
                {weekday}
            </div>
        </div>
    )
}

export default ToDoListHeader