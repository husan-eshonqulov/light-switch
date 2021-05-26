import { useState } from 'react';
import './App.css';
import Switch from '../switch/Switch';
import { Row } from 'react-bootstrap';

function App() {
    const [color, setColor] = useState('#343a40');
    const [bgColor, setBgColor] = useState('#fff');
    const [bodyColor, setBodyColor] = useState('#343a40');
    const [status, setStatus] = useState('On');

    const handleClick = () => {
        if (color === '#fff') {
            setColor('#343a40');
            setBgColor('#fff');
            setBodyColor('#343a40');
            setStatus('On');
        }
        else {
            setColor('#fff');
            setBgColor('#343a40');
            setBodyColor('#fff');
            setStatus('Off');
        }
    }

    interface IBtnStyle {
        color: string,
        backgroundColor: string,
    }

    const styleBtn: IBtnStyle = {
        color: color,
        backgroundColor: bgColor,
    };

    const styleBody = {
        backgroundColor: bodyColor,
    }

    return (
        <Row
            className="justify-content-center align-items-center m-0"
            id="app-row"
            style={styleBody}>
            <Switch style={styleBtn} status={status} handleClick={handleClick} />
        </Row>
    );
}

export default App;