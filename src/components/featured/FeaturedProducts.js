import React from "react";
import "./FeaturedProducts.css";
import BigImg from '../../images/featured-img/BigPear.png';
import Image1 from '../../images/featured-img/littlePear.png';
import Image2 from '../../images/featured-img/mushrooms.png';




const FeaturedProducts = () => {
    return (
        <>
        <p className="ProductsMenuTitle">Heading</p>
        <div class="FeaturedProducts">
        <div class="PopularFeatured">
            <img  className="PopularFeaturedImg" src={BigImg} alt="Pears"/>
            <p class="ProductTitle">Product</p>
            <p class="ProductDescr">Description of first product</p>
            <p class="ProductPrice">$10.99</p>
        </div>
        <div class="PopularProduct">
            <img className="PopularProductImg" src={Image1} alt="little pears"/>
            <p class="ProductTitle">Product</p>
            <p class="ProductDescr">Description of first product</p>
            <p class="ProductPrice">$10.99</p>
        </div>
        <div class="PopularProduct">
            <img className="PopularProductImg" src={Image2} alt="mushrooms"/>
            <p class="ProductTitle">Product</p>
            <p class="ProductDescr">Description of first product</p>
            <p class="ProductPrice">$10.99</p>
        </div>   
    </div>
    </>
    )
}

export default FeaturedProducts;