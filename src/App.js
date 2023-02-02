// import logo from './logo.svg';
import './App.scss';
import BeerBackground from './components/beer-background';
import TextSection from './components/text-section';

function App() {
  return (
    <div className="App">
      <div className='BeerBackground'>
        <BeerBackground/>
      </div>
      <TextSection/>
      <TextSection/>
      <TextSection/>
      <TextSection/>
      <TextSection/>
      <TextSection/>
      <TextSection/>
    </div>
  );
}

export default App;
