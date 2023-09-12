import React, {useState,useEffect} from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
 // console.log(props);
 const [isClicked,setIsClicked] = useState(false);

 useEffect( () =>{
    setTimeout(()=> {setIsClicked(false)},180);
},[isClicked])

    return (
        <button onClick={(evt)=>{
            setIsClicked(true);
          props.onClick('ok');

            //console.log(evt);
        }} className={isClicked? style.Button +" " + style.clicked :style.Button} style={{
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