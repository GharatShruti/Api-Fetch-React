import './App.css'
import Card from './components/Card'
import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const [records, setRecords] = useState([])

  useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>setRecords( data))
    .catch(error => console.log(error))
    },[]);


  return (
    <>
 <div className='App'>
      {records.map((country, index) => (
        <Card
          key={index}
          imgSrc="https://picsum.photos/300/200"
          imgAlt="Flag Image"
          cardtitle={country.name.common}
          carddesc={country.altSpellings}
          description={country.capital}
          cardbtn={country.population}
          link="/"
        />
      ))}
    </div>
    
    </>
  )
}


export default App
