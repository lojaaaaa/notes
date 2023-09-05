import { useState, useEffect} from "react"
import Card from "./components/Card/Card"
import Form from "./components/Form/Form";
import { ICard } from "./types/types";


const App = () => {

  const [notes, setNotes] = useState<ICard[]>([])

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes")
    if (storedNotes !== null){
      const parsedNotes = JSON.parse(storedNotes) as ICard[];
      setNotes(parsedNotes);
    }
  }, [])
  

  const [selectedNote, setSelectedNote] = useState<number>(0);

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