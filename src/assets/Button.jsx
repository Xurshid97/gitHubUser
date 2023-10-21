import React from 'react'

function Button({clickHandler}) {
  return (
    <button onClick={clickHandler}>Change</button>
  )
}

export default Button