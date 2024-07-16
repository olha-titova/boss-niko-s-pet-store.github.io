
import './App.css';
import Navigation from './components/header/Navigation';
import Main from './components/main/Main';
import ProductsMenu from './components/products/ProductsMenu';
import FeaturedProducts from './components/featured/FeaturedProducts';
import FooterWrapper from './components/footer/FooterWrapper';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <ProductsMenu/>
      <FeaturedProducts/>
      <FooterWrapper/>
      
    </div>
  );
}

export default App;
