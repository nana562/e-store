import React from 'react'
import itemData from "./itemData.js"
import Item from "./Item"

const Navbar = () =>{
    const itemComponent =  
  itemData.map(item=> <Item key={item.id}
                            img={item.img} 
                            title={item.title} 
                            info={item.info} 
                            price={item.price}  />)

    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <a className="navbar-brand" href="#">STORE</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">PRODUCTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">WATCHLIST</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CATEGORY</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={'login'}>login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">signup</a>
                </li>
            </ul>
            <input type="text" placeholder="SEARCH"/>
            </nav> 
            <div className="row">
              {itemComponent}
        </div>
        </div>

    )
}

export default Navbar