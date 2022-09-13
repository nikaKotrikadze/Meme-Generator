import './App.css';
import { Header } from './Header';
import { Meme } from './Meme';
import React,{useState} from 'react';

function App() {
  const [countMemes, setCountMemes] = useState(0)
  const handleMemeCount = () =>{
    setCountMemes(prev=>prev+1)
  }
  return (
    <div className="App">
      <Header countingMeme={countMemes}/>
      <Meme handleMemeCount={handleMemeCount}/>
    </div>
  );
}

export default App;
