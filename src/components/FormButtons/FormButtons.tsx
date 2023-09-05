import React, { FC} from 'react';
import style from './FormButtons.module.scss'

interface Props{
  onSave: () => void,
  id: number,
  removeNote: (id: number) => void,
  setSelectedNote: React.Dispatch<React.SetStateAction<number>>
}
const FormButtons: FC<Props> = ({id, onSave, setSelectedNote, removeNote}) => {

  const onDeleteNote = () =>{
    removeNote(id)
    setSelectedNote(0)
  }

  return (
    <div className={style.formButtons}>
      <button onClick={() => setSelectedNote(0)} className={style.formButton}>&larr;</button>
      <div className={style.buttons}>
        <button onClick={onDeleteNote} className={style.button}>&#10006;</button>
        <button onClick={onSave} className={style.button}>&#128190;</button>
      </div>
      
    </div>
  )
}

export default FormButtons