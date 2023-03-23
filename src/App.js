// import logo from './logo.svg';
import './App.scss';
import BeerBackground from './components/beer-background';
import BigIcon from './components/big-icon';
import Rules from './components/rules';

function App() {
  return (
    <div className="App">
      <h1 className="bigHeading">Gigantoball</h1>
      <BigIcon/>
      {/* Heading Gigantoball */}
      <BeerBackground/>
      {/* Rules */}
      <Rules/>
      {/* Time and Place */}
      {/* Preparations */}
      {/* Questions and Contact */}
      {/* Footer ? */}
    </div>
  );
}

export default App;
