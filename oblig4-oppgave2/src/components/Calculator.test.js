import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/dom'
import Calculator from './Calculator'

it('should have values and result starting at 0', () => {
    render(<Calculator />)

    const value1 = document.getElementById('inputValue1')
    expect(value1).toHaveValue('0')
    const value2 = document.getElementById('inputValue2')
    expect(value2).toHaveValue('0')
    const result = document.getElementById('resultText')
    expect(result).toHaveTextContent('Result is: 0')
})

it('should give 200 when multiplying 10 by 20', () => {
    render(<Calculator />)

    fireEvent.change(document.getElementById("inputValue1"), { target: { value: "10" } });
    fireEvent.change(document.getElementById("inputValue2"), { target: { value: "20" } });

    fireEvent.click(document.getElementById('multiplyButton'))

    const result = document.getElementById('resultText')
    expect(result).toHaveTextContent('Result is: 200')
})

it('should give -10 when subtracting 20 from 10', () => {
    render(<Calculator />)

    fireEvent.change(document.getElementById("inputValue1"), { target: { value: "10" } });
    fireEvent.change(document.getElementById("inputValue2"), { target: { value: "20" } });

    fireEvent.click(document.getElementById('subtractButton'))

    const result = document.getElementById('resultText')
    expect(result).toHaveTextContent('Result is: -10')
})

it('should give 30 when adding 10 to 20', () => {
    render(<Calculator />)

    fireEvent.change(document.getElementById("inputValue1"), { target: { value: "10" } });
    fireEvent.change(document.getElementById("inputValue2"), { target: { value: "20" } });

    fireEvent.click(document.getElementById('addButton'))

    const result = document.getElementById('resultText')
    expect(result).toHaveTextContent('Result is: 30')
})

it('should give 0.5 when dividing 10 by 20', () => {
    render(<Calculator />)

    fireEvent.change(document.getElementById("inputValue1"), { target: { value: "10" } });
    fireEvent.change(document.getElementById("inputValue2"), { target: { value: "20" } });

    fireEvent.click(document.getElementById('divideButton'))

    const result = document.getElementById('resultText')
    expect(result).toHaveTextContent('Result is: 0.5')
})

it('should give infinite when dividing 10 by 0', () => {
    render(<Calculator />)

    fireEvent.change(document.getElementById("inputValue1"), { target: { value: "10" } });
    fireEvent.change(document.getElementById("inputValue2"), { target: { value: "0" } });

    fireEvent.click(document.getElementById('divideButton'))

    const result = document.getElementById('resultText')
    expect(result).toHaveTextContent('Result is: Infinity')
})

/* Kommentert ut grunnet at event handler skjuler exception.
it('should give exception when entering non-numeric input', () => {
    render(<Calculator />)

    expect(() => fireEvent.change(document.getElementById("inputValue1"), { target: { value: "XYZ" } }) ).toThrow()

})*/