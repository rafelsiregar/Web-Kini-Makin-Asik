import logo from './logo.svg';
import './App.css';
import "./styles.css";

import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {

  const [errorMessage, setErrorMessage] = useState({username : "", password : ""});
  const [submitted, setSubmitted] = useState(false);



  //User Login Info is Fetched from API
  const error = {
    username : "Invalid Username.",
    password : "Invalid Password."
  };

  const getUserDatabase = ()=>{
    fetch('user.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        console.log(response)
        return response.json();
      }).then(function(myJson) {
        console.log(myJson);
      });
  }


  useEffect(()=>{
    getUserDatabase()
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var {username, password} = document.forms[0];
    const foundUser = getUserDatabase()['users'].find((user)=>user.username===username.value)

    if(foundUser){
      if(foundUser.password!==password.value){
        //Kalau passwordnya salah
        setErrorMessage({name : 'password', message : error.password});
      }else {
        setSubmitted(true);
      }
    }else{
      //Kalau usernya gaada
      setErrorMessage({name : 'username', message : error.username});
    }
  }

  
  //Error Message
  const renderErrorMessage = (name) => name === errorMessage.name  && (<Form.Text className = "error-message text-muted">{errorMessage.message}</Form.Text>);

  //Form
  const renderForm = (
     <Form onSubmit={handleSubmit} >
     <div className="form-title">Sign In</div>
     <Form.Group className="input-container">
         <Form.Label>Username</Form.Label>
         <Form.Control type="text" name="username" required />
         {renderErrorMessage("username")}
       </Form.Group>
       <Form.Group className="input-container">
         <Form.Label>Password </Form.Label>
         <Form.Control type="password" name="password" required />
         {renderErrorMessage("password")}
       </Form.Group>
        <Button variant="primary" type="submit" >Submit</Button>
     </Form>
  )



  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Kini Makin Asik Community</div>
        {submitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
