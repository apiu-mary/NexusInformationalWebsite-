import React from "react";
import './style.css';

const Product = ()=>{
    return(
        <div>
            <h2 className="heading" data-testid="title">What We Do</h2>
            <div className="products">
                <div>
                <img src="images/Vector.png" alt=""/>
                    <h3 data-testid="title1">Current Units</h3>
                    <p data-testid="text1">By utilizing users gain the ability to conveniently view their present power units</p>
                </div>
                <div>
                    <img src="images/octicon_history-24.png" alt=""/>
                    <h3 data-testid="title2">Power History</h3>
                    <p data-testid="text2">The Nexus Interface Unit offers a capability to display users power history</p>
                </div>
                <div>
               <img src="images/molecule.png" alt=""/>
                    <h3 data-testid="title3">Share Units</h3>
                    <p data-testid="text3">The Nexus Interface Unit provides the capacity to facilitate unit sharing .</p>
                </div>
            </div>
        </div>
    )
}
export default Product;