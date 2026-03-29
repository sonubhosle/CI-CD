import { render, screen } from '@testing-library/react';
import RecommendedJobs from '../RecommendedJobs';

describe('RecommendedJobs Component', () => {
    it('renders the Premium Ad promotion correctly', () => {
        render(<RecommendedJobs />);
        expect(screen.getByText(/^Pro$/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Upgrade Now/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Claim Premium/i })).toBeInTheDocument();
    });

    it('renders the Highly Recommended job lists module', () => {
        render(<RecommendedJobs />);
        expect(screen.getByRole('heading', { name: /Highly Recommended/i })).toBeInTheDocument();
        
        // It maps exactly 3 dummy elements natively inside RecommendJobs right now
        const recommendedTitles = screen.getAllByRole('heading', { name: /Lead UX Designer/i });
        expect(recommendedTitles.length).toBe(3);
    });

    it('has a footer expander to view all matches', () => {
        render(<RecommendedJobs />);
        expect(screen.getByText(/View all matches/i)).toBeInTheDocument();
    });
});
