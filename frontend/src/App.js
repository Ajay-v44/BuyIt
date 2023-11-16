import './App.css';
import NavBar from './components/NavBar/NavBar';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import { BrowserRouter, Rotes, Route } from '/react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Rotes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        </Rotes>
      </BrowserRouter>
    </>
  );
}

export default App;
