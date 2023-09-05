import React, { FC, useState} from 'react';
import style from './Form.module.scss'
import { ICard } from '../../types/types';


interface Props {
  notes: ICard[],
  selectedNote?: number | null,
  setSelectedNote?: React.Dispatch<React.SetStateAction<number | null>>
  setNotes?: React.Dispatch<React.SetStateAction<ICard[]>>
}

const Form: FC<Props> = ({notes, selectedNote, setSelectedNote, setNotes}) => {

  const currentNote = notes.find(note => note.id === selectedNote)
  
  const [title, setTitle] = useState(currentNote?.title)
  const [text, setText] = useState(currentNote?.text)


  const onSave = () => {
    const newNote = {
      id: selectedNote, 
      created: '04.09.2023', 
      text: text, 
      title: title, 
      count: text?.length
    }


    if(notes.find(note => note.id === currentNote?.id)){
      const index = notes.findIndex((note) => note.id === selectedNote);
      const updatedNote = { ...notes[index], text: text, title: title, count: text?.length};
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedNote;
      setNotes(updatedNotes)
    }
    else{
      setNotes(prev => [...prev, newNote])
    }

    
  }


  return (
    <>
      <div className={style.buttons}>
        <button onClick={() => setSelectedNote(null)} className={style.button}>	&larr;</button>
        <button onClick={onSave} className={style.button}>&#128190;</button>
      </div>
      <form className={style.form}>
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          type='text' 
          className={style.title} 
          placeholder='Заголовок'>
        </input>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          className={style.text} 
          placeholder='Заметка'>
        </textarea>
      </form>
    </>

  )
}

export default Form