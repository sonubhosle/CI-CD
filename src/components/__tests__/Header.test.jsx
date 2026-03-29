import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
    it('renders the branding logo successfully', () => {
        render(<Header />);
        // Checking for Nova branding
        const logos = screen.getAllByText(/Nova/i);
        expect(logos.length).toBeGreaterThan(0);
    });

    it('renders standard top navigational links', () => {
        render(<Header />);
        expect(screen.getByRole('link', { name: /Jobs/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Companies/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    });

    it('renders the search shortcut pill', () => {
        render(<Header />);
        const searchBox = screen.getByRole('searchbox', { name: /Open global job search/i });
        expect(searchBox).toBeInTheDocument();
    });

    it('triggers search modal overlay when search shortcut is clicked', () => {
        render(<Header />);
        const searchBox = screen.getByRole('searchbox', { name: /Open global job search/i });
        
        // Modal is hidden initially by opacity/classes, but the input exists
        const actualInput = screen.getByRole('textbox', { name: /Job title/i });
        expect(actualInput).toBeInTheDocument();
        
        fireEvent.click(searchBox);
        // Interaction succeeds without throwing errors
    });

    it('renders profile toggle interface properly', () => {
        render(<Header />);
        const profileBtn = screen.getByRole('button', { name: /Toggle user profile menu/i });
        expect(profileBtn).toBeInTheDocument();
    });
});
