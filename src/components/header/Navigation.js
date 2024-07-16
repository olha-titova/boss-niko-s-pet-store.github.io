import React from "react";
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="NavigationWrapper">
            <p className="NavigationTitle">Boss Niko’s Pet Shop</p>
            <div className="Navigation">
                <ul className="NavigationContainer">
                    <li className="NavigationItem">
                        <a href="#" className="NavigationLink">Page</a>
                    </li>
                    <li className="NavigationItem">
                        <a href="#" className="NavigationLink">Page</a>
                    </li>
                    <li className="NavigationItem">
                        <a href="#" className="NavigationLink">Page</a>
                    </li>
                </ul>
                <a href="#">
                    <button className="NavigationButton">Button</button>
                </a>
            </div>
        </div>
    );
}

export default Navigation;