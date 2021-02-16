import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch as Switcher, Route } from "react-router-dom";
import Checkout from './Checkout'

function App() {
  return (
    // BEM (convention for styling)
    <Router>
      <div className="app">
        <Header />
        <Switcher>

          // Checkout route
          <Route path="/checkout">
            <Checkout />           
          </Route>

          // Default route should be at the bottom or there will be errors
          <Route path="/">
            <Home />
          </Route>

        </Switcher>
      </div>
    </Router>
  );
}

export default App;
