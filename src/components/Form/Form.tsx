import React, { FC, useMemo} from 'react';
import style from './Form.module.scss'
import { ICard } from '../../types/types';
import useInput from '../../hooks/useInput';
import { updateNotesLocalStorage } from '../../utils/updateNotesLocalStorage';
import FormButtons from '../FormButtons/FormButtons';



interface Props {
  notes: ICard[],
  selectedNote: number
  setSelectedNote: React.Dispatch<React.SetStateAction<number>>
  setNotes: React.Dispatch<React.SetStateAction<ICard[]>>
}

const Form: FC<Props> = ({notes, selectedNote, setNotes, setSelectedNote}) => {

  const currentNote: ICard = useMemo(() => 
    (notes.find(note => note.id === selectedNote) || {text: '', title: ''}
  ), [selectedNote, notes])

  const title = useInput(currentNote.title)
  const text = useInput(currentNote.text)


  const removeNote = (id: number) =>{
    const updatedNotes = notes.filter(notes => notes.id !== id)
    setNotes(updatedNotes)
    updateNotesLocalStorage(updatedNotes)
  }



  const onSave = () => {

    if(currentNote.id){
      const index = notes.findIndex((note) => note.id === selectedNote);
      const updatedNote = { ...currentNote, text: text.value, title: title.value, count: text.value.length};
      const updatedNotes = [...notes]
      updatedNotes[index] = updatedNote;
      setNotes(updatedNotes)
      updateNotesLocalStorage(updatedNotes)
    }
    else{
      const newNote: ICard = {
        id: selectedNote, 
        created: '04.09.2023', 
        text: text.value, 
        title: title.value, 
        count: text.value.length || 0
      }
      setNotes(prev => [...prev, newNote])
      updateNotesLocalStorage([...notes, newNote])
    }

    
  }


  return (
    <>
      <FormButtons removeNote={removeNote} id={selectedNote} onSave={onSave} setSelectedNote={setSelectedNote}/>
      <form className={style.form}>
        <input 
          {...title}
          type='text' 
          className={style.title} 
          placeholder='Заголовок'>
        </input>
        <textarea 
          {...text}
          className={style.text} 
          placeholder='Заметка'>
        </textarea>
      </form>
    </>

  )
}

export default Form