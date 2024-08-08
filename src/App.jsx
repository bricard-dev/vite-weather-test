import './App.css';
import loader from './assets/loader.svg';

function App() {
  return (
    <main>
      <div className="loader-container">
        <img src={loader} alt="loader icon" />
      </div>
      <p className="city-name">Paris</p>
      <p className="country-name">France</p>
      <p className="temperature">17°</p>
      <div className="info-icon-container">
        <img src="/icons/01d.svg" className="info-icon" alt="weather icon" />
      </div>
    </main>
  );
}

export default App;
