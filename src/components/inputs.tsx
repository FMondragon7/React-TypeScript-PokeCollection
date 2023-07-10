import { ChangeEvent } from "react"

interface InputProps {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>)=> void;
  placeholder?: string;
  label: string;
}

function Input({id, type, name, value, onChange, placeholder, label}: InputProps) {
  return (
    <div>
      <label htmlFor={id} >{label}</label>
      <input 
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input