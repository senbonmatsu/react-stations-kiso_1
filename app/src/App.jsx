import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <>
    <header className="App-header">
      <h3>掲示板</h3>
      <Link to={`thread/new`}><p>スレッドを立てる</p></Link>
    </header>
    <div id='detail'>
      <Outlet/>
    </div>
    <footer></footer>
  </>
  );
}

export default App;
