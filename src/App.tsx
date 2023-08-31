

const App = () => {
  return (
    <div className="wrapper">
      <section className="notes">
        <div className="notes__container container">
          <h1 className="title">All Notes</h1>
          <div className="cards">
            <div className="card">
              <h3 className="card-title">name of note</h3>
              <button className="card-button">&#8250;</button>
              <p className="card-text">250</p>
            </div>
            <div className="card">
              <h3 className="card-title">name of note</h3>
              <button className="card-button">&#8250;</button>
              <p className="card-text">250</p>
            </div>
            <div className="card">
              <h3 className="card-title">name of note</h3>
              <button className="card-button">&#8250;</button>
              <p className="card-text">250</p>
            </div>
            <div className="card">
              <h3 className="card-title">name of note</h3>
              <button className="card-button">&#8250;</button>
              <p className="card-text">250</p>
            </div>
            
          </div>
          <button className="button">+</button>
        </div>
      </section>
    </div>
  )
}

export default App