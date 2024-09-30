import React from 'react'
import { useId } from 'react'

const Input=React.forwardRef(function Input({
 label,
 type='text',
 className='',
 ...props
},ref){

  const id=useId()  
  return (
    <div className="w-full">
      {label && <label className='inline-block mb-1 pl-1'
      htmlFor={id}
      >{label}</label>}

      <input 
      type={type} 
      className={` 
      px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      {...props}
      ref={ref}
      id={id}
      />
    </div>
  )

})

export default Input

