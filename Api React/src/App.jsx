import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <div className='App'>
       <Card 
       imgSrc="https://picsum.photos/300/200"
       imgAlt="Card Image"
       cardtitle="TITLE"
       carsdesc="This is the basic description icnNcM's car"
       cardbtn="Read More"
       />
      </div>
    
    </>
  )
}

export default App
