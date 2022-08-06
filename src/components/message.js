import React from 'react';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.message = props.message;
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.message.time}</th>
                <td>{this.message.author}</td>
                <td>{this.message.message}</td>
            </tr>
        );
    }

}

export default Message;