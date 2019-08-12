import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushi)
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(piece => <Sushi components={piece} key={piece.id}/>)}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer