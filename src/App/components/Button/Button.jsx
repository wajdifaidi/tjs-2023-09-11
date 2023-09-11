import React from "react";
import style from './Button.module.css'
const Button = (props) => {
  console.log(props);
    return (
        <button className={style.Button} >{props.text}</button>

    )
}

export default Button;