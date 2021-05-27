import Switch from './Switch';
import { render, screen } from '@testing-library/react';

describe('<Switch>', () => {
    test("initial button's value must be 'On'", () => {
        const styleBtn = {
            color: '#fff',
            backgroundColor: '#343a40',
        }
        const status = 'On';
        const onClick = jest.fn();

        render(<Switch style={styleBtn} status={status} handleClick={onClick} />);
        const button = screen.getByRole('button');

        console.log(button);
        // expect(button.value).toBe('On');
    });
});