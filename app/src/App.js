import logo from './logo.svg';
import './App.css';
import Products from "./Products"
import ProductList from './ProductList';

function App() {
  return (
   <div> 
<h1 className="title">Products</h1>

<div className="product"/>
  <img src={Products[0].image}/>
  <p>{Products[0].name}</p>
  <p>{Products[0].price} KD</p>

   </div>
  );
}

export default App
