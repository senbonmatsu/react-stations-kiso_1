
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [threads,setThreads] = useState([]);
  useEffect(()=>{
  fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=1')
  .then(res=>res.json())
  .then(data => {
    setThreads(data)
    console.log(data)
  })},[])
  return (
  <>
    <header className="App-header">
      <h3>掲示板</h3>
    </header>
    <div className='App-body'>
      <h5>新着スレッド</h5>
      <div>
        <table className='App-table'>
          <tbody>
          {
            threads.map(threads => 
              <tr className='App-table-tr' key={threads.id}>
                <td className='App-table-td' key={threads.id}>{threads.title}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
    <footer></footer>
  </>
  );
}

export default App;
