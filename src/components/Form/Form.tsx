import React, { FC, useState} from 'react';
import style from './Form.module.scss'


type Props = {
  title?: string,
  setSelectedNote?: React.Dispatch<React.SetStateAction<number | null | undefined>>
  setNotes?: React.Dispatch<React.SetStateAction<number | null | undefined>>
}

const Form: FC<Props> = ({notes, selectedNote, setSelectedNote, setNotes}) => {


  const index = notes.findIndex(note => note.id === selectedNote)
  console.log(index)

  const [title, setTitle] = useState(notes[index]?.title)
  const [text, setText] = useState(notes[index]?.text)


  const onSave = () => {
    const newNote = {
      id: selectedNote, 
      created: '04.09.2023', 
      text: text, 
      title: title, 
      count: text.length
    }

    if(notes.find(note => note.id === selectedNote)){
      const index = notes.findIndex((note) => note.id === selectedNote);
      const updatedNote = { ...notes[index], text: text, title: title, count: text.length};
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedNote;
      setNotes([...updatedNotes])
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
        <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' className={style.title} placeholder='Заголовок'></input>
        <textarea value={text} onChange={(e) => setText(e.target.value)}className={style.text} placeholder='Заметка'></textarea>
      </form>
    </>

  )
}

export default Form