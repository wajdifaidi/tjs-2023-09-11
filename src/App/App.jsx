import react from 'react'
import Button from './components/Button/Button.jsx';

// autre façon de déclarer une function
// function App(props){
// }

const App=(props) => {


return    <div className='App'>Hello world
            <hr/>
            <Button text="wajdi" bgColor ="Red"/>
            <Button text="button"/>

         </div>

};

export default App;