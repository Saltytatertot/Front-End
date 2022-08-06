export class MessageModel {
    constructor(data) {
        this.message = data.message;
        this.author = data.author;
        this.time = data.time;
    }
}

export class ScheduleModel {
    constructor(data) {
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.date = data.date;
        this.courseCode = data.courseCode;
        this.faculty = data.facultyName;
    }
}

export class RoomModel {
    constructor(data) {
        this.roomNumber = data.roomNumber;
        this.schedules = [];
        this.messages = [];
        for (const s of data.schedules) {
        this.schedules.push(new ScheduleModel(s));
        }
        for (const m of data.messages) {
        this.messages.push(new MessageModel(m));
        }
        this.time = data.time;
    }
}