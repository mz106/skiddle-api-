
import './App.css';

import { useEffect, useState } from 'react';

import fetchEvents from './utils/functions';

function App() {

  const [events, setEvents] = useState();

  useEffect(() => {
    (async() => {
      setEvents(await fetchEvents());
    })();
  }, []);

  const clickHandler = async () => {
    console.log(events)
    events.forEach(async(item) => {
      console.log(item)
    });
    
  };

  return (
    <div className="App">
      <h1 onClick={clickHandler}>click to log events</h1>
    </div>
  );
}

export default App;
