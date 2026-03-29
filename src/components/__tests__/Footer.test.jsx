import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
    it('renders the brand logo and message', () => {
        render(<Footer />);
        // Use getAllByText as "Nova" appears in logo and copyright
        expect(screen.getAllByText(/Nova/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/Connecting brilliant minds/i)).toBeInTheDocument();
    });

    it('renders the candidate navigation links', () => {
        render(<Footer />);
        expect(screen.getByRole('heading', { name: /For Candidates/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Search Jobs/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Career Advice/i })).toBeInTheDocument();
    });

    it('renders the employer navigation links', () => {
        render(<Footer />);
        expect(screen.getByRole('heading', { name: /For Employers/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Post a Job/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Talent Solutions/i })).toBeInTheDocument();
    });

    it('renders contact information properly', () => {
        render(<Footer />);
        expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /123/i })).toBeInTheDocument(); // matches phone number block
        expect(screen.getByRole('link', { name: /contact@novajobs.com/i })).toBeInTheDocument();
    });

    it('renders the legal bottom bar', () => {
        render(<Footer />);
        expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
    });
});
