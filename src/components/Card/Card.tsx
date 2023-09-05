import React, { FC, memo} from 'react';
import { ICard } from '../../types/types';

interface ICardProps extends ICard {
  setSelectedNote: React.Dispatch<React.SetStateAction<number>>
}

const Card: FC<ICardProps> = memo(({
  title, 
  count, 
  created, 
  setSelectedNote, id
  }) => {

  const onEditNote = () => {
    if(id){
      setSelectedNote(id)
    } 
  }

  return (
    <div className="card">
      <div className="card-bottom">
        <h3 className="card-title">{title}</h3>
        <button onClick={onEditNote} className="card-button">&#8250;</button>
      </div>
      <div className="card-bottom">
        <p className="card-text">{count}</p>
        <p className="card-date">{created}</p>
      </div>
  </div>
  )
})

export default Card