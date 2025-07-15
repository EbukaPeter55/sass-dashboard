import Header from '../Header';
import {fireEvent, render, screen} from "@testing-library/react";

describe('Header', () => {

    it('renders without crashing', () => {
        render(<Header/>);
    });

    it('toggles the notification dropdown when bell icon is clicked', () => {
        render(<Header onMenuClick={jest.fn()}/>);

        const bellIcon = screen.getByTestId('notification-bell');
        fireEvent.click(bellIcon);

        const dropdown = screen.getByTestId('notification-dropdown');
        expect(dropdown).toBeVisible();
    });
});

