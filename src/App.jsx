import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter/Greeter';
import List from './components/List/List';
import { useState } from 'react';
import randColor from './Utilities/random_color.js'
import List2 from './components/ListFromGet/List2';

function App() {

  const [records, serRecords] = useState([...Array(50)].map(a => ({ name: randColor() }) ));

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
        <span className='home'>Hello</span>
        <span style={{opacity: 0}}>Bye</span>
        <List2 />
        <Greeter />
        <List records={records}/>
      </header>
    </div>
  );
}

export default App;
