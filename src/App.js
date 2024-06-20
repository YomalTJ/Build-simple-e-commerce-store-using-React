import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import ProductCreate from './ProductCreate';
import ProductUpdate from './ProductUpdate';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<ProductCreate />}/>
            <Route path='/products/:id' element={<ProductDetails />}/>
            <Route path='/update' element={<ProductUpdate />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// npx json-server --watch data/Products.json --port 8000