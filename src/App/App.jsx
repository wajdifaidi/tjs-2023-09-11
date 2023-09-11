import react from 'react'
import Button from './components/Button/Button.jsx';

// autre façon de déclarer une function
// function App(props){
// }

const App=(props) => {


return    <div className='App'>Hello world
            <hr/>
            <Button text={1} bgColor ="tomato" />
            <Button text={1} bgColor ="red"  onClick={(arg)=>{console.log('clické',arg)}}
            />
         </div>

};

export default App;