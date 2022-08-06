import React from 'react';

class Schedule extends React.Component {

    constructor(props) {
        super(props);
        this.schedule = props.schedule;
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.schedule.courseCode}</th>
                <td>{this.schedule.faculty}</td>
                <td>{this.schedule.startTime}</td>
                <td>{this.schedule.endTime}</td>
                <td>{this.schedule.date}</td>
            </tr>
        );
    }

}

export default Schedule;