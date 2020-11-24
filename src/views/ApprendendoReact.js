import '../assets/css/ApprendendoReact.css';
import { Home } from './Home';
import { Intro } from './Intro';
import { ListsAndConditionals } from './ListsAndConditionals';
import { AdvancedConcepts } from './AdvancedConcepts';
import { Hooks } from './Hooks';


function ApprendendoReact() {
  return (
    <div>
      <div className="Title">
        <h1>React annotations</h1>
        <p>Developed by Facebook. A study by Rodrigo Fentanes.</p>
      </div>
        <Home/>
        <Intro/>
        <ListsAndConditionals/>
        <AdvancedConcepts/>
        <Hooks/>   
    </div>
  );
}

export default ApprendendoReact;