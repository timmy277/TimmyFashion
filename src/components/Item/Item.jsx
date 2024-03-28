import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {
    return (
    <div>
        <Link to = {`/Product/${props.id}`}>
            <img src={props.image} alt="" />
        </Link>
        
        <p>{props.name}</p>
        <div>
            {props.new_price}
        </div>
        <div>
            {props.old_price}
        </div>
    </div>
    )
}

export default Item;