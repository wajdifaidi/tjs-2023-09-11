import React from "react";
const Button = (props) => {
  console.log(props);
    return (
        <button className='Button'>{props.text}</button>

    )
}

export default Button;