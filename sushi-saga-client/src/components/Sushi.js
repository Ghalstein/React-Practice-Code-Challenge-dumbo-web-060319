import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {img_url, name, price} = props.components;
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleEatenSushi(props.components)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten.includes(props.components) ?
            null
          :
            <img src={img_url} width="100%" alt="sushi"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.components.name} - ${props.components.price}
      </h4>
    </div>
  )
}

export default Sushi