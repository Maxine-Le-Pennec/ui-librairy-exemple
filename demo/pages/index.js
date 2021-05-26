import React from 'react'

import Buttons from '../components/buttons'
import ButtonsIcon from '../components/buttons-icon'

function HomePage() {
  return (
  <div>
    <Buttons />
    <ButtonsIcon />

    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 1em;
        padding: 1em;
      }
    `}</style>
  </div>
 )
}

export default HomePage