import React from "react";
import "./ProductsMenu.css";
import img1 from '../../images/products/Image1.png';
import img2 from '../../images/products/Image2.png';
import img3 from '../../images/products/Image3.png';
import img4 from '../../images/products/Image4.png';
import img5 from '../../images/products/Image5.png';
import img6 from '../../images/products/Image6.png';



const ProductsMenu = () => {
    return (
<div className="ProductsMenu">
        <p className="ProductsMenuTitle">Heading</p>
        <div className="ProductCardWrapper">
            <div className="ProductCard">
                <img className="ProductImg" src={img1}/>
                <p className="ProductTitle">Product</p>
                <p className="ProductDescr">Description of first product</p>
                <p className="ProductPrice">$10.99</p>
            </div>
            <div className="ProductCard">
                <img className="ProductImg" src={img2}/>
                <p className="ProductTitle">Product</p>
                <p className="ProductDescr">Description of first product</p>
                <p className="ProductPrice">$10.99</p>
            </div>
            <div className="ProductCard">
                <img className="ProductImg" src={img3}/>
                <p className="ProductTitle">Product</p>
                <p className="ProductDescr">Description of first product</p>
                <p className="ProductPrice">$10.99</p>
            </div>
            <div className="ProductCard">
                <img className="ProductImg" src={img4}/>
                <p className="ProductTitle">Product</p>
                <p className="ProductDescr">Description of first product</p>
                <p className="ProductPrice">$10.99</p>
            </div>
            <div className="ProductCard">
                <img className="ProductImg" src={img5}/>
                <p className="ProductTitle">Product</p>
                <p className="ProductDescr">Description of first product</p>
                <p className="ProductPrice">$10.99</p>
            </div>
            <div className="ProductCard">
                <img className="ProductImg" src={img6}/>
                <p className="ProductTitle">Product</p>
                <p className="ProductDescr">Description of first product</p>
                <p className="ProductPrice">$10.99</p>
            </div>
        </div>
        
    </div>
    )
}

export default ProductsMenu;