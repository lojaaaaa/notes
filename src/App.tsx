import { useState } from "react"
import Card from "./components/Card/Card"
import Form from "./components/Form/Form";


const App = () => {

  const [notes, setNotes] = useState([])

  const [selectedNote, setSelectedNote] = useState<number | null | undefined>();

  const handleButton = () =>{
    setSelectedNote(notes.length + 1)
  }

  return (
    <div className="wrapper">
      <section className="notes">
        <div className="notes__container container">
          {selectedNote
            ? <Form setSelectedNote={setSelectedNote}/>
            :
            <>
              <h1 className="title">All Notes</h1>
                <div className="cards">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              <button className="button" onClick={handleButton}>+</button>
            </>
            }



        </div>
      </section>
    </div>
  )
}

export default App