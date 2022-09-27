import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {RiUser3Line} from 'react-icons/ri'
import {FaBars, FaShoppingBag} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../JS/actions/userAction'




function NavBar() {
	const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()
  return (
    <>
<header className='header'>{

   isAuth ?
    (<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 ">
						<div className="logo">
							<Link to={'#'}><img src='' alt=''/></Link>
						</div>
						<nav className="navbar">
							<ul className="navbar_menu">
								<li><Link to={'/'}>home</Link></li>
								<li><Link to={'/shop'}>shop</Link></li>
								<li><Link to={'#'}>promotion</Link></li>
								<li><Link to={'/'}  onClick={() => dispatch(logout())}>logout</Link></li>
								
							</ul>
							<ul className="navbar_user">
								<li><Link to={'#'}><i  ><BsSearch/></i></Link></li>
								<li><Link to={'/signin'}><i ></i><RiUser3Line className='user-us'/></Link></li>
								<li className="checkout">
									<Link to={'#'}>
										<i className="fa fa-shopping-cart" ><FaShoppingBag/></i>
										<span id="checkout_items" className="checkout_items">0</span>
									</Link>
								</li>
							</ul>
							<div className="hamburger_container">
								<i className="fa fa-bars" ><FaBars/></i>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>)
		:
		(<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 ">
						<div className="logo">
							<Link to={'#'}><img src='' alt=''/></Link>
						</div>
						<nav className="navbar">
							<ul className="navbar_menu">
								<li><Link to={'/'}>home</Link></li>
								
								<li><Link to={'#'}>promotion</Link></li>
								
								
							</ul>
							<ul className="navbar_user">
								<li><Link to={'#'}><i  ><BsSearch/></i></Link></li>
								<li><Link to={'/signin'}><i ></i><RiUser3Line className='user-us'/></Link></li>
								<li className="checkout">
									<Link to={'#'}>
										<i className="fa fa-shopping-cart" ><FaShoppingBag/></i>
										<span id="checkout_items" className="checkout_items">0</span>
									</Link>
								</li>
							</ul>
							<div className="hamburger_container">
								<i className="fa fa-bars" ><FaBars/></i>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>)
        
}</header>
    </>
  )
}

export default NavBar