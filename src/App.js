import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className="App">
      <Cart/>
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
