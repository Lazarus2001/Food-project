import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <main>
        <Meals/>
      </main>
      </header>
    </div>
  );
}

export default App;
