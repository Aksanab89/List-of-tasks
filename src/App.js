import './App.css';
import { ListOfTasks } from './ListOfTasks';
import image from './tasks.jpg';
import imageTwo from './finished.jpg';

function App() {

  return (
    <div className="App">
     <div className= "container">
     <img src={image} width="250 px" alt="tasks"/>
     </div>
     <div className= "container">
     <h1>The list of tasks</h1>
     </div>
     <ListOfTasks />
     <div className= "container">
     <img src={imageTwo} width="150 px" alt="tasks finished"/>
     </div>
    </div>
  );
  
}

export default App;
