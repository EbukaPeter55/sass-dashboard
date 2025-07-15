import {render, screen} from '@testing-library/react';
import CountrySelector from '../CountrySelector';

describe('CountrySelector', () => {
    it('renders without crashing', () => {
        render(<CountrySelector/>);
        expect(screen.getByText(/US/i)).toBeInTheDocument(); // Default country label
    });
});
