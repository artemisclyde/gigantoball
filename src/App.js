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
      <div class="text-section"><TextSection/></div>
      <div class="text-section"><TextSection/></div>
      <div class="text-section"><TextSection/></div>
      <div class="text-section"><TextSection/></div>
      <div class="text-section"><TextSection/></div>
      <div class="text-section"><TextSection/></div>
    </div>
  );
}

export default App;
