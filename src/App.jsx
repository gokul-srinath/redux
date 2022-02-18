import asyncAction from './redux-principles/asyncActions';
import principles from './redux-principles/index';


function App() {
  return (
    <div className="App">
      {principles()}
      {asyncAction()}
    </div>
  );
}

export default App;
