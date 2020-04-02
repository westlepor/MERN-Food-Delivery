import React from 'react';
import './biz_hour.css';

class BizHour extends React.Component {
    constructor(props) {
        super(props);
    }

    timeConvert(hour) {
        const start = hour.slice(0, 2);
        const suffix = (parseInt(start) >= 12) ? 'pm' : 'am';
        const end = hour.slice(2);
        return `${start >= 12 ? start % 12: start}:${end} ${suffix}`
    }

    isOpen() {
        if (new Date().getDay() != this.props.hour.day) {
            return null;
        }
        const startHourMin = parseFloat(this.props.hour.start) / 100
        const endHourMin = parseFloat(this.props.hour.end) / 100
        const curTime = new Date().getHours() + (new Date().getMinutes() / 100);

        if (curTime > startHourMin && curTime < endHourMin) {
            return <span className="biz-hour-opened">Open now</span >
        } else {
            return <span className="biz-hour-closed">Closed now</span >
        }
    }

    render() {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ""];
        const day = weekday[this.props.hour.day];
        const start = this.timeConvert(this.props.hour.start);
        const end = this.timeConvert(this.props.hour.end);
        const open = this.isOpen();

        return (
            <div className="biz-hour">
                <span className="biz-hour-day">{day}</span>
                <span className="biz-hour-time">{start} - {end}</span>
                {open}
            </div>
        )
    }
}

export default BizHour;
