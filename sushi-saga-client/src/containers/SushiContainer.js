import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushi)
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(piece => <Sushi eaten={props.eaten} handleEatenSushi={props.handleEatenSushi} components={piece} key={piece.id}/>)}
        <MoreButton handleMoreButtonClicked={props.handleMoreButtonClicked}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer