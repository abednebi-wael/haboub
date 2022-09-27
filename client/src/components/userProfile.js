import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function UserProfile() {

  const user = useSelector(state => state.userReducer.user)


  return (
    <div className='profile'>
      <ul className="cards">
  <li>
    <Link to={"#"} className="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title" >{user && user.fullName}</h3>                     
            <span className="card__status">1 minute ago</span>
          </div>
        </div>
        <p className="card__description">welcome back </p>
      </div>
    </Link>      
  </li>
  </ul>
    </div>
  )
}

export default UserProfile