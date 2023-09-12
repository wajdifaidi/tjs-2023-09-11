import react, { useEffect, useState } from 'react'
import Button from './components/Button/Button.jsx';

// autre façon de déclarer une function
// function App(props){
// }
//let counter =0;
const App=(props) => {
const [state,setState] = useState({counter:0,hello:"world"});

// useEffect( () =>{
//     console.log('montage');
//     setState({...state,counter:0});
// },[state])

return    <div className='App'>Hello world
         valeur de counter : {state.counter}
            <hr/>
            <Button text={1} bgColor ="tomato" style={{width:"254px"}} onClick={()=>{
                setState({...state,counter:state.counter+1});
                //setIsClicked({isClicked:true});
                console.log(state);
            }}> +</Button>
            <Button bgColor ="black" onClick={()=>{
                setState({...state,counter:state.counter-1});
                console.log(state);
            }}>-</Button>
          
         </div>

};

export default App;