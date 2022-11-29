import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
function App() {

  const [cartIsShown,setCartIsShown] = useState(false);

  const shownCartHandler = () =>
  {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  } 
  return (
    <div className="App">
      {cartIsShown && <Cart onHide={hideCartHandler}/>}
      <header className="App-header">
        
        <Header onShow={shownCartHandler}/>
      <main>
        <Meals/>
      </main>
      </header>
    </div>
  );
}

export default App;
