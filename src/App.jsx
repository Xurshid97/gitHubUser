import { useState, useEffect, useRef } from 'react'
import './App.css'
import Button from './assets/Button'

function App() {
  let [userData, setUserData] = useState({})
  let [conditionVal, setConditionVal] = useState('')
  let userRef = useRef()

  let clickHandler = () => {
    setConditionVal(userRef.current.value.trim())
  }

  useEffect(()=> {
    let api = `https://api.github.com/users/${conditionVal}`
    fetch(api)
    .then((request)=> {
      return request.json()
    })
    .then((data)=> {
      setUserData(data)
    })
    .catch((err)=> {
        console.log(err);
    })
  }, [conditionVal])

  return (
    <>
      <div className='form'>
        <input type="text" ref={userRef}/>
        <Button clickHandler={clickHandler} />
      </div>

      <div className='card'>
          <div className='avatar'>
              <img src={userData.avatar_url} alt="" />
          </div>
          <p>Bio: {userData.bio}</p>
          <p>FirstName: {userData.name}</p>
          <p>Location: {userData.location}</p>
      </div>
    </>
  )
}

export default App
