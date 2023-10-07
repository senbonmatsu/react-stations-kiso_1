import React, { useEffect, useState } from 'react';
import './App.css';

export function HomeTreads() {
  const [threads,setThreads] = useState([]);
  useEffect(()=>{
  (async()=>{
  const response = await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0');
  const data = await response.json();
  setThreads(data);
  console.log(data);
  })()},[]);
  return (
  <>
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

