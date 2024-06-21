import React from 'react'
import './Newcollection.css'
import Newcollect from "../Assets/new_collections"
import Item from "../Items/Item"
const Newcollections = () => {
  return (
    <div className='newcollections'>
      <h1>New Collection</h1>
      <hr />
      <div className="Collections">
    {Newcollect.map((item,index)=>{
        return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
    })}
      </div>
    </div>
  )
}

export default Newcollections
