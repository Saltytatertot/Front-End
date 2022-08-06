import React from 'react';
import Weather from '../pages/weather';

const Footer = (props) => {
    const stringToShow = (props.time) ? "Last updated: " + props.time : "";
    return (
        <footer className="App-footer">
            <Weather></Weather>
            {stringToShow}
        </footer>
    );
}

export default Footer;