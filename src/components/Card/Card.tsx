import React, { FC} from 'react';
import { ICard } from '../../types/types';

interface ICardProps extends ICard {
  setSelectedNote: (id: number) => void;
}

const Card: FC<ICardProps> = ({title, count, created, setSelectedNote, id}) => {

  const onEdit = () => {
    setSelectedNote(id)
  }

  
  return (
    <div className="card">
      <div className="card-bottom">
        <h3 className="card-title">{title}</h3>
        <button onClick={onEdit} className="card-button">&#8250;</button>
      </div>
      <div className="card-bottom">
        <p className="card-text">{count}</p>
        <p className="card-date">{created}</p>
      </div>
  </div>
  )
}

export default Card