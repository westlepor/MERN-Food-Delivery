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
    
    render() {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ""];
        // if (this.props.hour.day > 9)
        const day = weekday[this.props.hour.day];
        const start = this.timeConvert(this.props.hour.start);
        const end = this.timeConvert(this.props.hour.end);
        // const open = this.isOpen();

        return (
            <div className="biz-hour">
                <span className="biz-hour-day">{day}</span>
                <span className="biz-hour-time">{start} - {end}</span>
                {/* {open} */}
            </div>
        )
    }
}

export default BizHour;
