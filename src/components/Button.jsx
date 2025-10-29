import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-blue-300 border text-black rounded-full px-2.5 ' >{props.title}</button>
    </div>
  )
}

export default Button;

