import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import './style.css'
const Product = ()=>{
    return(
        <div>
            <h2 className="heading" data-testid="title">What We Do</h2>
            <div className="products">
                <div>
                <FontAwesomeIcon icon={faDashboard} />
                    <h3 data-testid="title1">Current Units</h3>
                    <p data-testid="text1">By utilizing the Nexus Interface Unit, users gain the ability to conveniently view their present power units</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faHistory} />
                    <h3 data-testid="title2">Power History</h3>
                    <p data-testid="text2">The Nexus Interface Unit offers a capability to display users power history</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faShare} />
                    <h3 data-testid="title3">Share Units</h3>
                    <p data-testid="text3">The Nexus Interface Unit provides the capacity to facilitate unit sharing among diverse users.</p>
                </div>
            </div>
        </div>
    )
}
export default Product;