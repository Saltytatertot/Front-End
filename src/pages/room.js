import React from 'react';
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { RoomModel } from '../models.js';
import Message from '../components/message.js';
import Schedule from '../components/schedule.js';
import Footer from '../components/footer.js';

const theme = createTheme({
  palette:{
    primary: {
      main: '#666666',
      contrastText: ''
    },
    secondary: {
      light: '#444ce8',
      main: '#757444',
    },
  },
});

class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: false
    }
  }

  componentDidMount() {
    this.getRoom();
  }

  getRoom = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/Room?roomnumber=${process.env.REACT_APP_ROOM_NUMBER}`)
      .then((res) => {
        res.json().then((data) => {
          let room = new RoomModel(data);
          this.setState({ result: room });
        });
      }).catch((err) => {
        console.log("Something went wrong fetching room: " + err);
      });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h3" backgroundcolor="#FFFFFF" className="text-center">
            Room {this.state.result && this.state.result.roomNumber} Information 
                {/* Should be in its own object. Probably a span? */}
        </Typography> 

        <table className="table table-light text-center">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Author</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result && this.state.result.messages.map((v, i) => <Message key={i} message={v}></Message>)}
          </tbody>
        </table>

        <table className="table table-light text-center">
          <thead>
            <tr>
              <th scope="col">Course Code</th>
              <th scope="col">Faculty</th>
              <th scope="col">Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result && this.state.result.schedules.map((v, i) => <Schedule key={i} schedule={v}></Schedule>)}
          </tbody>
        </table>

        <Footer time={this.state.time}></Footer>
      </ThemeProvider>
    );
  }

}
  
export default Room;