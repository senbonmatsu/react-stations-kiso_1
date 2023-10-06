import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [threads,setThreads] = useState([]);
  useEffect(()=>{
  fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0')
  .then(res=>res.json())
  .then(data => {
    setThreads(data)
    console.log(data)
  })},[])
  return (
  <>
    {/* <BrowserRouter> */}
    <header className="App-header">
      <h3>掲示板</h3>
      {/* <Link to='thread/new'>スレッドを立てる</Link> */}
      <p to='thread/new'>スレッドを立てる</p>
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
    {/* <Router>
      <Routes>
        <Route exact path='thread/new'>
          <Make_threads />
        </Route>
      </Routes>
    </Router>
    </BrowserRouter> */}
  </>
  );
}

export default App;
