import './Switch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button } from 'react-bootstrap';

interface ISwitchProps {
    style: IBtnStyle,
    status: string,
    handleClick: () => void;
}

interface IBtnStyle {
    color: string,
    backgroundColor: string,
}

function Switch(props: ISwitchProps) {
    return (
        <Row>
            <Button
                style={props.style}
                variant="dark"
                size="lg"
                id="switch-btn"
                onClick={() => props.handleClick()}
            >{props.status}</Button>
        </Row>
    );
}

export default Switch;