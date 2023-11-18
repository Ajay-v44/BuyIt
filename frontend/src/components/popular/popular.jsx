import React from 'react'
import data_product from '../Assets/data';
import './popular.css';
import Item from '../item/Item'
const popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
            {data_product.map((item) => (
                    <Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                ))}
            </div>
        </div>



    )
}

export default popular