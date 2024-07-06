import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [toss, setToss] = useState("X")
  const [arr, setArr] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  const handleClick = (ele) => {
    if (!winner) {
      if (arr[Number(ele.id)] === null) {
        setArr((prev) => {
          prev[Number(ele.id)] = toss
          return [...prev]
        })
        setToss(toss === "X" ? "O" : "X")
      }
    }
  }

  function chekcWinner() {
    if (
      (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
      (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
      (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
      (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
      (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
      (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
      (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
      (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
      setWinner((toss === "X") ? "Winner is O" : "Winner is X")
    }else{
      if (!arr.includes(null)) {
        setWinner("Draw Play! Again!")
      }
    }
  }

  
  useEffect(() => {
    chekcWinner()
  }, [arr])


  return (
    <>
      <h1>TIC TAC TOE</h1>
      <div className="main">
        <div className="container">
          {arr && arr?.map((element, index) => {
            return <div key={index} onClick={(e) => handleClick(e.target)} className="item" id={index}> {element} </div>
          })}
        </div>
        {winner && <div className="winner">
          <div className=""> {winner}  </div>
          <button  onClick={()=>{setArr(Array(9).fill(null)); setWinner(null) }} >Play Again</button>
        </div>}
      </div>

    </>
  )
}

export default App
