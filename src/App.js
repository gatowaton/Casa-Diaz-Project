import './App.css';
import Nav from "./components/nav/Nav"
import ProductCard from './components/productCard/ProductCard';
import ProductCard2 from './components/productCard/ProductCard2';
import Slider from "./components/slider/Slider"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Slider/>
      <div className='cards'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard2/>
      </div>
    </div>
  );
}

export default App;
