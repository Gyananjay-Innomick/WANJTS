import { render, screen } from '@testing-library/react'
import SearchBox from '../Components/SearchBox'
import '@testing-library/jest-dom'

describe("searchbox", () => {
    test("render input field", () => {
        const plaeceholder = "test placeholder"
        render(<SearchBox plaeceholder={plaeceholder} />)
        const searchBox = screen.getByTestId('searchbox_input');
        expect(searchBox).toBeInTheDocument();
    })
})