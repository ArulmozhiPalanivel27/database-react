import { SampleData } from "../src/database/components/SampleData";
import './App.css';
function App() {
  return (
    <div className="SampleData">
     {/*  <header className="App-header">
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
      </header> */}

     <SampleData />
     </div>
  );
}

export default SampleData;
