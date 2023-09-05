import { useState } from "react"
import Card from "./components/Card/Card"
import Form from "./components/Form/Form";
import { ICard } from "./types/types";


const App = () => {

  const [notes, setNotes] = useState<ICard[]>([
    {id: 1, created: '04.09.2023', text: 'some text', title: 'Head title', count: 50},
    {id: 2, created: '04.09.2023', text: 'some text2', title: 'Head title2', count: 50},
    {id: 3, created: '04.09.2023', text: 'some text3', title: 'Head title3', count: 50},
    {id: 4, created: '04.09.2023', text: 'some text4', title: 'Head title4', count: 50},
  ])

  const [selectedNote, setSelectedNote] = useState<number | null>(null);

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