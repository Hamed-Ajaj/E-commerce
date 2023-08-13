import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Cart } from "./pages/Cart";
import ShopContextProvider from "./context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
            <Navbar />
              <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />}/>
              </Routes>
          </Router>
      </ShopContextProvider>
  
    </div>
  );
}

export default App;
