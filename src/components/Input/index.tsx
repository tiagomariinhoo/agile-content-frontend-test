import React, { useState, useRef, useEffect } from "react"
import "./styles.css"

const SearchIcon = () => {
  return (
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
  )
}

const ClearButton = ({ onClick, isHidden }) => {
  return (
    <button
      data-testid="clear-text-icon"
      onClick={onClick}
      className={`clear-btn ${isHidden ? `hidden` : ``}`}
      hidden={isHidden ? true : false}>
      <div style={{ display: 'flex' }}>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>

      </div>
    </button>
  )
}

interface InputProps {
  onKeyPress?: (evt) => void;
  onChange: (evt) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ onKeyPress, onChange, value, ...props }) => {
  const [text, setText] = useState('')
  const handleClearText = () => {
    setText("")
    onChange("")
  }

  useEffect(() => {
    setText(value)
  }, [value])

  const handleChange = (evt) => {
    setText(evt.target.value)
    onChange(evt.target.value)
  }

  return (
    <div className="input-container" {...props}>
      <SearchIcon />
      <input
        value={text}
        onKeyDown={onKeyPress}
        onChange={handleChange}
        data-testid="input" />

      {
        text.length > 0 &&
        < ClearButton onClick={handleClearText} isHidden={text.length === 0} />
      }
    </div>
  )
}

export default Input