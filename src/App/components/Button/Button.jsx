import React, {useState,useEffect} from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
 // console.log(props);
    return (
        <button onClick={(evt)=>{
          props.onClick('ok');
            //console.log(evt);
        }} className={style.Button} style={{
            backgroundColor:props.bgColor,
            ...props.style,
        
        }}>{props.children}</button>

    )
}

Button.propTypes={
    children:PropTypes.any.isRequired,
    bgColor:PropTypes.oneOf(['tomato','black','transparent']).isRequired,
    onClick:PropTypes.func.isRequired,
    style: PropTypes.shape({
        width:PropTypes.string,
        padding:PropTypes.string,
    })
}

Button.defaultProps={
    bgColor:"black",
}
export default Button;