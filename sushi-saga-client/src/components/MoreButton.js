import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.handleMoreButtonClicked()}>
            More sushi!
          </button>
}

export default MoreButton