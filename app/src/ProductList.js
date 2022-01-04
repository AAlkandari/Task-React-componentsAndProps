import React from 'react'
import Product from './Products'

function ProductList() {
           const prodHTML = Product.map(product => <Product data={product}/>);

           return <div className="product-list"> {prodHTML} </div>;
}

export default ProductList