
import './App.css';
import Header from './components/Header'
import Footer from './components/Foooter';
import Card from './components/Card';
import { useState } from 'react';
function App() {
  const [state, setState] = useState('green')
  function handleColorChange(color) {
    setState(color)
  }
  return (
    <div className="App">
      <Header />
      {state}

      <div style={{ display: 'flex' }}>
        <div style={{ background: 'red', padding: '2rem' }}>
          <button onClick={() => handleColorChange('red')}>red</button>
        </div>
        <div style={{ background: 'blue', padding: '2rem' }}>
          <button onClick={() => handleColorChange('blue')}>blue</button>
        </div>
        <div style={{ background: 'yellow', padding: '2rem' }}>

          <button onClick={() => handleColorChange('yellow')}>yellow</button></div>
        <div style={{ background: 'green', padding: '2rem' }}>

          <button onClick={() => handleColorChange('green')}>green</button>
        </div>
      </div>

      <div style={{ background: state, padding: '2rem' }}>
      </div>
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />

    </div>
  );
}

export default App; 
