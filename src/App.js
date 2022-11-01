import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className="container-fluid">
          <section className="row">
            <div className="col-6 col-md-4 bg-primary text-white">
              bg-primary
            </div>
            <div className="col-6 col-md-4 bg-secondary text-white">
              bg-secondary
            </div>
            <div className="col-6 col-md-4 bg-info text-dark">bg-info</div>
          </section>
        </main>
    </div>
  );
}

export default App;
