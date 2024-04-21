import { useState, useEffect } from 'react';
import PinBoard from './components/PinBoard';

import data from "./MockNotas.json";

import './App.css'

function App() {
  const [noteList, setNoteList] = useState(data)

  useEffect(() => setNoteList(data), [data]);

  return (
    <>
      <main>
        <h1>Notes PinBoard App</h1>
        <PinBoard noteList={noteList} />
      </main>
    </>
  );
}

export default App;
