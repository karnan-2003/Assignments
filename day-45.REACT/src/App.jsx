import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloName from './day-45/task-01'
import UppercaseInput from './day-45/task-02'
import CheckboxStatus from './day-45/task-03'
import CountrySelect from './day-45/task-04'
import PasswordMatch from './day-45/task-05'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloName/>
    <hr />
    <UppercaseInput/>
    <hr />
    <CheckboxStatus/>
    <hr />
    <CountrySelect/>
    <hr />
    <PasswordMatch/>

    </>
  )
}

export default App
