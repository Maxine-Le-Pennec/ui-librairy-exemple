import React from 'react';

const Button = (props) => {
  const {theme, icon} = props

  return (
    <button className={`${theme} ${icon && 'icon'}`}>
      <span>{icon}</span>
      {props.children}
    </button>
  )
}

export default Button;