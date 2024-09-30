import React from 'react'
import { useId } from 'react'

function Select({
  options,
  label,
  className='',
  ,,,props
},ref) {
  const id=useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=""></label>}
      <select
      {...props}
      id={id}
      ref={ref}
      className={`px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      >
        {options?.map((option)=>(
          <option key={}>
            {option}
          </option>
        ))} 

      </select>
    </div>
  )
}

export default React.forwardRef(Select)
