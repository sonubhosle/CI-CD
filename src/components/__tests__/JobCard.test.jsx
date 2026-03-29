import { render, screen } from '@testing-library/react';
import JobCard from '../JobCard';

describe('JobCard Component', () => {
    it('renders a job title dynamically by prop ID parameter', () => {
        // Render with i=2
        render(<JobCard i={2} />);
        expect(screen.getByText(/Senior Frontend Engineer/i)).toBeInTheDocument();
    });
    
    it('renders alternative job titles for odd prop ID parameter', () => {
        // Render with i=3
        render(<JobCard i={3} />);
        expect(screen.getByText(/Lead Full Stack Architect/i)).toBeInTheDocument();
    });

    it('displays standard dynamic structural tags', () => {
        render(<JobCard i={1} />);
        expect(screen.getByText(/Remote/i)).toBeInTheDocument();
        expect(screen.getByText(/Full Time/i)).toBeInTheDocument();
        expect(screen.getByText(/\$130k - \$160k/i)).toBeInTheDocument();
    });

    it('has interactive bookmark and apply buttons', () => {
        render(<JobCard i={1} />);
        const saveBtn = screen.getByRole('button', { name: /Save Job/i });
        const applyBtn = screen.getByRole('button', { name: /Quick Apply/i });
        expect(saveBtn).toBeInTheDocument();
        expect(applyBtn).toBeInTheDocument();
    });
});
