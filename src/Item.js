import React, {useState} from 'react'
import itemData from './itemData'


function Item(props){
    const [showText, setShowText] = useState(true);
    console.log(itemData)
    return(
                 <div className="col-sm-4">
                    <div className="product-image">
                        <img src={props.img} alt="s"/>
                    </div>
                    <div className="product-info">
                        {showText &&<h4>Product: {props.title}</h4>}
                        {showText &&<h6> SPECS: {props.info}</h6>}
                        {showText &&<p>Price: {props.price}
                        <a href="/products"> Learn more</a> </p>}
                     </div>
                     <hr/>
                </div>
               
    )
}

export default Item