import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Stopka from "./Stopka"
import Header from './Header';

function Platnosc() {
  const location = useLocation()
  let suma = 0
  if(location.state){
    const {id} = location.state
    let store = JSON.parse(localStorage.getItem(id))
    if(store){
      store.ilosc = store.ilosc+1
      window.localStorage.setItem(id, JSON.stringify(store));
    }else{
      window.localStorage.setItem(id, JSON.stringify(location.state));
    }}
  let id=[],
      ilosc=[],
      cena=[],
      opis=[],
      keys = Object.keys(localStorage),
      length = keys.length,
      i = 1;
  while ( i<=length ) {
      let store = JSON.parse(localStorage.getItem(keys[i-1]))
      i++;
      id.push(store.id)
      ilosc.push(store.ilosc)
      cena.push(store.cena)
      opis.push(store.opis)    }

  const [bilety,setBilety] = useState([{
      id:id,
      ilosc:ilosc,
      cena:cena,
      opis:opis}])

     
useEffect(()=>{
  const scoreDiv = document.getElementById('tabelka')
        let tableHeaders = ["LP.", "OPIS", "I.", "CENA [ZŁ]","",""]
        while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild) // Remove all children from scoreboard div (if any)
        let scoreboardTable = document.createElement('table') // Create the table itself
        scoreboardTable.className = 'scoreboardTable'
        let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
        scoreboardTableHead.className = 'scoreboardTableHead'
        let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
        scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
        // Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
        tableHeaders.forEach(header => {
          let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
          scoreHeader.innerText = header
          scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
        })
        scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
        scoreboardTable.append(scoreboardTableHead)
        let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
        scoreboardTableBody.className = "scoreboardTable-Body"
        scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
        scoreDiv.append(scoreboardTable) // Appends the table to the scoreboard div
  let keys = Object.keys(localStorage),
      length = keys.length,
      i = 0;
  while ( i<length ) { 
    appendScores(bilety, i) // Creates and appends each row to the table body
    i++;
}
}, [bilety])


// The function below will accept a single score and its index to create the global ranking
const appendScores = (store, singleScoreIndex) => {
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    // Lines 72-85 create the 5 column cells that will be appended to the current table row
    let lp = document.createElement('td')
    lp.innerText = singleScoreIndex+1
    let opis = document.createElement('td')
    opis.innerText = store[0].opis[singleScoreIndex]
    let ilosc = document.createElement('td')
    ilosc.innerText = store[0].ilosc[singleScoreIndex]
    let cena = document.createElement('td')
    cena.innerText = (Math.round(((store[0].cena[singleScoreIndex]*store[0].ilosc[singleScoreIndex]) + Number.EPSILON) * 100) / 100).toFixed(2);
    let plus = document.createElement('td')
    let plusbutton = document.createElement('input');
    plusbutton.type = "button";
    plusbutton.className = "plus_minus";
    plusbutton.value = "+";
    plusbutton.name = "plus"+store[0].id[singleScoreIndex]
    plusbutton.onclick = plusincrement
    plus.appendChild(plusbutton)
    let minus = document.createElement('td')
    let minusbutton = document.createElement('input');
    minusbutton.type = "button";
    minusbutton.className = "plus_minus";
    minusbutton.value = "-";
    minusbutton.name = "minus"+store[0].id[singleScoreIndex]
    minusbutton.onclick = minusincrement
    minus.appendChild(minusbutton)
    scoreboardTableBodyRow.append(lp, opis, ilosc, cena, minus, plus) // Append all 5 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
}

const plusincrement = e => { 
  e.preventDefault()
  let temp = bilety
  for(let i in temp[0].id){
    if ("plus"+temp[0].id[i] === e.target.name){
      temp[0].ilosc[i]++
      let nowy = temp[0].ilosc
      setBilety({...bilety, ilosc:nowy})
      let state={id:temp[0].id[i] ,cena:temp[0].cena[i], opis: temp[0].opis[i], ilosc:temp[0].ilosc[i]}
      window.localStorage.setItem(temp[0].id[i], JSON.stringify(state));
      } 
  }
}

const minusincrement = e => { 
  e.preventDefault()
  let temp = bilety
  for(let i in temp[0].id){
    if ("minus"+temp[0].id[i] === e.target.name && temp[0].ilosc[i]>1){
      temp[0].ilosc[i]--
      let nowy = temp[0].ilosc
      setBilety({...bilety, ilosc:nowy})
      let state={id:temp[0].id[i] ,cena:temp[0].cena[i], opis: temp[0].opis[i], ilosc:temp[0].ilosc[i]}
      window.localStorage.setItem(temp[0].id[i], JSON.stringify(state));
      } 
  }
}

    return (
      <div>
        <Header />
        <div id='platnosc'>
          <div id='tabelka'>

          </div>
      </div>
      
        <Stopka />
      </div>
      
    );
  }
  
  export default Platnosc;
  


