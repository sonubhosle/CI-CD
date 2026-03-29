import { render, screen } from '@testing-library/react';
import ProfileSidebar from '../ProfileSidebar';

describe('ProfileSidebar Component', () => {
    it('renders the user profile banner successfully', () => {
        render(<ProfileSidebar />);
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/Senior Software Engineer/i)).toBeInTheDocument();
    });

    it('displays profile completion percentage', () => {
        render(<ProfileSidebar />);
        expect(screen.getByText(/Profile Completion/i)).toBeInTheDocument();
        expect(screen.getByText(/85%/i)).toBeInTheDocument();
    });

    it('displays physical location and experience metadata', () => {
        render(<ProfileSidebar />);
        expect(screen.getByText(/San Francisco/i)).toBeInTheDocument();
        expect(screen.getByText(/8\+ Years Experience/i)).toBeInTheDocument();
    });

    it('renders activity metrics widget correctly', () => {
        render(<ProfileSidebar />);
        expect(screen.getByRole('heading', { name: /Your Activity/i })).toBeInTheDocument();
        expect(screen.getByText(/Profile Views/i)).toBeInTheDocument();
        expect(screen.getByText(/Interviews/i)).toBeInTheDocument();
    });
});
