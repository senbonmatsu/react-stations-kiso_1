import { Link } from "react-router-dom";
import './makeThreads.css';

const handleSubmit = async(e) => {
  e.preventDefault();
  const data = e.target;
  const formData = new FormData(data);
  const formJson = Object.fromEntries(formData.entries());
  await fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",{
    method:"post",
    headers:{
      "accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(formJson),
  });
  console.log(formJson);
}

export function MakeThreads(){
  return(
    <div className="makeThreads">
      <h3 className="threadTitle">スレッド新規作成</h3>
      <form method="post" onSubmit={handleSubmit}>
        <div className="inputTitle">
          <input type='text' className='inputTitleForm' name="title" required/>
        </div>
        <div className="flexBox">
          <div className="homeButton">
            <p><Link to={`/`}>Topに戻る</Link></p>
          </div>
          <div className="titleSubmitButton">
            <input type='submit' className="SubmitButton" value={'作成'} />
          </div>
        </div>
      </form>
    </div>
  )
}
