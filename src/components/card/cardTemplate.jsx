import React from 'react'
import './cardTemplate.css'

function CardTemplate() {
  return (
    <div className='card-template'>
      <div className="card__container-template">
        <div className="card-img-template">

        </div>
        <div className="card-body-template">
          <p className='text-min-template'></p>
          <div className="card-body-stats-template">
            <div className="stats-template">
            </div>
            <div className="stats-template">
            </div>
            <div className="stats-template">
            </div>
            <div className="stats-template">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTemplate