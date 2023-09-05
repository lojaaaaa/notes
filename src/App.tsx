import { useState, useEffect} from "react"
import Card from "./components/Card/Card"
import Form from "./components/Form/Form";
import { ICard } from "./types/types";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";


const App = () => {

  const [notes, setNotes] = useState<ICard[]>([])
  const [selectedNote, setSelectedNote] = useState<number>(0);

  useEffect(()=>{
    const parsedNotes = getFromLocalStorage("notes") as ICard[]
    setNotes(parsedNotes)
  }, [])

  const onCreateNote = () =>{
    setSelectedNote(notes.length + 1)
  }

  return (
    <div className="wrapper">
      <section className="notes">
        <div className="notes__container container">
          {selectedNote
            ? <Form
              notes={notes} 
              selectedNote={selectedNote} 
              setNotes={setNotes} 
              setSelectedNote={setSelectedNote}/>
            :
            <>
              <h1 className="title">All Notes</h1>
                <div className="cards">
                  {notes.map(note => 
                    <Card 
                      title={note.title}
                      text={note.text}
                      count={note.count}
                      created={note.created}
                      key={note.id}
                      id={note.id}
                      setSelectedNote={setSelectedNote}
                    />)}
                </div>
              <button className="button" onClick={onCreateNote}>+</button>
            </>
            }
        </div>
      </section>
    </div>
  )
}

export default App