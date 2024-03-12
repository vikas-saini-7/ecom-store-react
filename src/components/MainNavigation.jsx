import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useSelector } from 'react-redux'

const MainNavigation = () => {
    const {items} = useSelector((state) => state.cart);
  return (
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? classes.active : undefined}
                        end 
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='products'
                        className={({isActive}) => isActive ? classes.active : undefined} 
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Link to='/cart'>
            <div className={classes.cart}>
                <span>
                    <i style={{fontSize:'1rem', color: 'black'}} class="fa-solid fa-cart-shopping"></i>
                </span>
                &nbsp;
                <span className={classes.cartCounter}>{items.length}</span>
            </div>
        </Link>
    </header>
  )
}

export default MainNavigation