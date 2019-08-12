import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {img_url, name, price} = props.components;
  console.log(props.components.img_url);
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ null}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          !true ?
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