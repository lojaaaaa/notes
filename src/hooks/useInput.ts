import { useState, ChangeEvent } from 'react';


interface UseInputReturn {
  value: string,
  onChange: (event: ChangeEvent <HTMLInputElement>) => void
}

export default function useInput (initValue: string): UseInputReturn {

  const [value, setValue] = useState(initValue)

  const onChange = (event: ChangeEvent <HTMLInputElement>) =>{
    setValue(event.target.value)
  }

  return {value, onChange}
}