import { useState } from 'react'
export const useToggle = (initialValue) => {
   const [value, setValue] = useState(initialValue)
   const toggle = () => {
      setValue(!value)
   }
   return [value, toggle]
}
