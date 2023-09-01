import React, { FC} from 'react';
import { ICard } from '../../types/types';



const Card: FC<ICard> = () => {
  
  return (
    <div className="card">
      <div className="card-bottom">
        <h3 className="card-title">About my day</h3>
        <button className="card-button">&#8250;</button>
      </div>
      <div className="card-bottom">
        <p className="card-text">250</p>
        <p className="card-date">25.08.2023</p>
      </div>
  </div>
  )
}

export default Card