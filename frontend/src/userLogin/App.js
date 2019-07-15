import React from 'react';
import './App.css';


import {Button , Form , FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {GoogleLoginButton} from 'react-social-login-buttons';
// import {Image} from 'react-strap';
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (

    <Form className="login-form">
      <div className ="text-center">
          <img  src="0.png" alt ="logo" height="92" width="92" />
      </div>
      <h1>
        <span className="font-weight-bold">raKna</span>.com
      </h1>
      <br/>
      <br/>
      <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>

      </FormGroup>
      <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password"/>
      </FormGroup>
      <Button className ="btn-lg btn-dark btn-block">Log in</Button>
      <br/>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <GoogleLoginButton className="mt-3 mb-3"/>
      <div className ="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </Form>
  );
}

export default App;
