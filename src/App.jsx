import { useState, useEffect } from 'react'
import HomePresentacional from './HomePresentacional'
import AuthSuccess from './AuthSuccess'
import './App.css'


function App() {
  const [success, setSuccess] = useState(false)

  const datasSuccess = (id) => {
    const dataDelete = fetch(`http://localhost:3000/api/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(result => setDataDB(result))
    return dataDelete
  }

  return (
    <div className="App">
      {
        success 
        ?
        <AuthSuccess exit={()=>setSuccess(false)}/>
        :<HomePresentacional authSuccess={()=>setSuccess(true)} />
      }
    </div>
  )
}

export default App
