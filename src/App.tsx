

const App = () => {
  return (
    <div className="wrapper">
      <section className="notes">
        <div className="notes__container container">
          <h1 className="title">All Notes</h1>
          <div className="cards">
            <div className="card">
              <div className="card-bottom">
                <h3 className="card-title">About my day</h3>
                <button className="card-button">&#8250;</button>
              </div>
              <div className="card-bottom">
                <p className="card-text">250</p>
                <p className="card-date">25.08.2023</p>
              </div>

            </div>
            <div className="card">
              <div className="card-bottom">
                <h3 className="card-title">About my day</h3>
                <button className="card-button">&#8250;</button>
              </div>
              <div className="card-bottom">
                <p className="card-text">250</p>
                <p className="card-date">25.08.2023</p>
              </div>

            </div>
            <div className="card">
              <div className="card-bottom">
                <h3 className="card-title">About my day</h3>
                <button className="card-button">&#8250;</button>
              </div>
              <div className="card-bottom">
                <p className="card-text">250</p>
                <p className="card-date">25.08.2023</p>
              </div>

            </div>
            <div className="card">
              <div className="card-bottom">
                <h3 className="card-title">About my day</h3>
                <button className="card-button">&#8250;</button>
              </div>
              <div className="card-bottom">
                <p className="card-text">250</p>
                <p className="card-date">25.08.2023</p>
              </div>

            </div>
          </div>
          <button className="button">+</button>
        </div>
      </section>
    </div>
  )
}

export default App