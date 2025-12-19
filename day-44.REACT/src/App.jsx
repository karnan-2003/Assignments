
import './App.css'
import LoginStatus from './day-44/task-01'
import PremiumButton from './day-44/task-02'
import CityList from './day-44/task-03'
import CityLists from './day-44/task-04'
import DataList from './day-44/task-05'
import TodoList from './day-44/task-06'
import TodoLists from './day-44/task-07'
import UserList from './day-44/task-08'
import NotificationBadge from './day-44/task-09'
import AttendanceList from './day-44/task-10'

function App() {


  return (
    <>
    <LoginStatus isloggedIn={true}/>
    <LoginStatus isloggedIn={false}/>
    <br />
    <PremiumButton isPremiumUser={true} />
    <PremiumButton isPremiumUser={false} />
    <br />
    <CityList/>
    <br />
    <CityLists/>
    <hr />
    <DataList/>
    <hr />
    <TodoList/>
    <br />
    <TodoLists/>
    <hr />
    <UserList/>
    <hr />
    <NotificationBadge/>
    <br />
    <AttendanceList/>

   
    </>
  )
}

export default App
