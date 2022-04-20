import { useEffect, useState } from 'react'

export const useHover = (ref) => {
   const [isHovering, setisHavering] = useState(false)
   const on = () => {
      setisHavering(true)
   }
   const off = () => {
      setisHavering(false)
   }
   useEffect(() => {
      if (!ref.current) {
         return
      }
      const node = ref.current
      node.addEventListener('mouseenter', on)
      node.addEventListener('mousemove', on)
      node.addEventListener('mouseleave', off)
      // eslint-disable-next-line consistent-return
      return () => {
         node.removeEventListener('mouseenter', on)
         node.removeEventListener('mousemove', on)
         node.removeEventListener('mouseleave', off)
      }
   }, [])
   return isHovering
}
