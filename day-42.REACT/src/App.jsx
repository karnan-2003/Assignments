import './App.css'
import avatar from './assets/Shin-Chan.Image.jpg'
import HelloStudent from './day-42.react/task-01';
import Student from './day-42.react/task-02';
import Message from './day-42.react/task-03';
import Button from './day-42.react/task-04';
import Card from './day-42.react/task-05';
import ProfileCard from './day-42.react/task-06'
import Buttons from './day-42.react/task-07'
import ProfileItem from './day-42.react/task-08';
import Layout from './day-42.react/task-09';
import Component from './day-42.react/task-10';


function App(){
  return(
    <>
    <HelloStudent/>
    <br />
    <Student name="Karnan.M" age={21}/>
    <br />
    <Message text="Welcome to React-js.!"/>
    <br />
    <Button text="Click ME.!"/>
    <br />
    <Card>
       <h3>5.Student Info:🐮</h3>
        <p>Name: Karnan</p>
        <p>Age: 21</p>
        <hr />
        <p>Welcome Karnan.!</p>
    </Card>
    <br />
    <ProfileCard
    avatar={avatar}       
    name="karnan"
    job="Frontend-Developer"
    />
    <br />
      <Buttons text="Save" color="green" size="small" />
      <Buttons text="Submit" color="blue" size="medium" />
      <Buttons text="Delete" color="red" size="large" />
      <br />
      <h2>8.Product Items:</h2>
      <hr />
      <h3>1.product.💻</h3>
      <ProfileItem title="Laptop" price={55000}/>
      <hr />
      <h3>2.product.☎️</h3>
      <ProfileItem title="mobile" price={20000}/>
      <br />
      <Layout>
        <h3>Welcome!</h3>
      <p>This content is rendered using children.</p>
      </Layout>
      <hr />
      <br />
      <Component content="Hi.! sasikumar"/>
    </>

    
  );
};

export default App;