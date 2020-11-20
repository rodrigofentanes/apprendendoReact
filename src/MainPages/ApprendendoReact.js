import '../css/ApprendendoReact.css';
import Intro from './Intro';
import {ListsAndConditionals} from './ListsAndConditionals';


function ApprendendoReact() {
  return (
    <div>
      <div className="Title">
        <h1>React annotations</h1>
        <p>Developed by Facebook. A study by Rodrigo Fentanes.</p>
      </div>
        <Intro/>
        <ListsAndConditionals/> 
    </div>
  );
}

export default ApprendendoReact;