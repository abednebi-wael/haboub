import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import '../App.css'
import { addUser, userLogin } from "../JS/actions/userAction";


const Signin =  () => {
  const card = document.getElementById('card')
  const openSignin = () => { 
    card.style.transform='rotateY(-180deg)' 
  }
  const openLogin = () => {
    card.style.transform='rotateY(0deg)'
  }

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const dispatch = useDispatch()
  

  const register = (e) => {
    const newUser = {fullName , email , password}
    e.preventDefault();
    dispatch(addUser(newUser))
    setFullName('')
    setEmail('')
    setPassword('')
    
  }
  const login = (e) => {
    const userCard = {email , password}
    e.preventDefault();
    dispatch(userLogin(userCard))
    setEmail('')
    setPassword('')
    setFullName('')
  }
  
  
  const isAuth = useSelector(state => state.userReducer.isAuth)
  
  return  (
    isAuth? <Navigate to='/shop' />:
    <div className="container1">
      <div className="card">
        <div className="inner-box" id="card">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form>
              <input type={"email"} 
              className="input-box" 
              placeholder="your email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              />
              <input type={"password"} 
              className="input-box" 
              placeholder="your password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
              />
              <button type="submit" 
              className="submit-btn1"
              onClick={login}
              >Login</button>
              <input type={"checkbox"} /> <span>Remember me</span>
            </form>
            <button type="button" className="btn1" onClick={openSignin} >I'm New Here</button>
             <Link to={''}> Forgot password?</Link>
          </div>
          <div className="card-back">
          <h2>REGISTER</h2>
            <form>
              <input type={"text"} 
              className="input-box" 
              placeholder="your fullName"
              value = {fullName}  
              onChange={(e) => setFullName(e.target.value)}
                />
               
              <input type={"email"} 
              className="input-box" 
              placeholder="your email"
              value = {email}  
              onChange={(e) => setEmail(e.target.value)}
              />
            
              <input type={"password"} 
              className="input-box" 
              placeholder="your password"
              value = {password}  
              onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="submit-btn1" onClick={register}>Login</button>
              <input type={"checkbox"} /> <span>Remember me</span>
            </form>
            <button type="button" className="btn1" onClick={openLogin}>I've an account</button>
             <Link to={''}> Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
