import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import Input from '../../components/Input'

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByTestId } = render(
      <Input value='' onChange={jest.fn} />
    )

    expect(getByTestId('input')).toBeTruthy()
  })

  it('should be able see a value', () => {
    const { getByDisplayValue } = render(
      <Input value='bird' onChange={jest.fn} />
    )

    expect(getByDisplayValue('bird')).toBeTruthy()
  })

  it('should be able to see a clear icon when there\'s a value', () => {
    const { getByTestId } = render(
      <Input value='bird' onChange={jest.fn} />
    )

    expect(getByTestId('clear-text-icon')).toBeInTheDocument()
  })

  it('should be able to clear text', async () => {
    const onChange = jest.fn()
    render(
      <Input value='bird' onChange={onChange} />
    )

    var clearBtn = screen.getByTestId('clear-text-icon')
    fireEvent.click(clearBtn)

    await waitFor(() => {
      expect(onChange).toBeCalled()
      expect(screen.getByTestId('input')).toHaveValue('');
      expect(screen.queryByTestId('clear-text-icon')).toBeNull();
    })
  })
})