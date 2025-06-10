import React from 'react'

interface Props {
  text: string;
}
const Button = ({text}: Props) => {
  return (
    <div className='btn btn-primary'>
      {text}
    </div>
  )
}

export default Button 
