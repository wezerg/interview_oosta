import { render } from '@testing-library/react'
import Progress from '../components/Progress';

// Test on progress component
test("Progress bar render successfully", () => {
    const {container} = render(<Progress 
        remainingTime={5000}
        totalTime={5000}
    /> );

    expect(container.querySelector('.progress-bar')).toBeInTheDocument();
});
test("Progress bar percentage calcul are good", () => {
    const {container} = render(<Progress 
        remainingTime={5000}
        totalTime={5000}
    /> );
    const progressBar = container?.querySelector('.progress-inner');
    if (progressBar) {
        expect(getComputedStyle(progressBar).width).toBe("100%");
    }
});
test("Progress bar percentage calcul after rerender", () => {
    let remainTime = 5000;
    const {container, rerender} = render(<Progress 
        remainingTime={remainTime}
        totalTime={5000}
    />);
    remainTime -= 1000;
    rerender(<Progress 
        remainingTime={remainTime}
        totalTime={5000}
    />);

    const progressBar = container?.querySelector('.progress-inner');
    if (progressBar) {
        // Ensure that we have only one element in test
        expect(container.querySelectorAll('.progress-bar').length).toBe(1);
        // Check percentage after recalcul
        expect(getComputedStyle(progressBar).width).toBe("80%");
    }
});
