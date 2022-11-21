import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

test("renders h1 app heading", () => {
    render(<Home />);
    const h1Heading = screen.getByText(/weather forecast app/i);
    expect(h1Heading).toBeInTheDocument();
});

test("render 4 city image", () => {
    render(<Home />);
    const cityImages = screen.getAllByRole('img');
    expect(cityImages).toBeInTheDocument;
    expect(cityImages.length === 4).toBeTruthy();
})

//city image src and alt should have same name..
test("city image src and alt check", () => {
    render(<Home />);
    const cityImages = screen.getAllByRole('img');
    cityImages.map((cityImage) => {
        const cityAltRegex = new RegExp(cityImage.alt, "i");
        const citySrcRegex = new RegExp(cityImage.src, "i");
        const cityName = cityAltRegex.test(citySrcRegex);
        expect(cityName).toBeTruthy();
    });
});