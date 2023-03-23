// import logo from './logo.svg';
import './App.scss';
import BeerBackground from './components/beer-background';
import { Gi3DStairs } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <h1 className="bigHeading">Gigantoball</h1>
      <div className='whiteee'><Gi3DStairs/></div>
      <div className='BeerBackground'>
        <BeerBackground/>
      </div>
      {/* Heading Gigantoball */}
      {/* Rules */}
      {/* Time and Place */}
      {/* Preparations */}
      {/* Questions and Contact */}
      {/* Footer ? */}
    </div>
  );
}

export default App;
