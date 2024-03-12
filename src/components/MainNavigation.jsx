import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useSelector } from 'react-redux'

const MainNavigation = () => {
    const {items} = useSelector((state) => state.cart);
  return (
    <>
    <header className="custom-container bg-white flex items-center justify-between h-[72px]">
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

        <div className='flex items-center gap-6'>
            <img className='w-7' src="./images/user.png" alt="" />
            <Link to='/cart'>
                <div className="flex relative">
                    <img className='w-8' src="./images/cart.png" alt="" />
                    &nbsp;
                    <span className="absolute px-2 flex items-center justify-center bg-yellow-400 bg-opacity-60 border rounded-md border-black -top-2 -right-4 text-lg font-bold">{items.length}</span>
                </div>
            </Link>
        </div>
    </header>
    <div className='custom-container bg-white h-[50px] flex items-center justify-between border-t sticky top-0'>sub header</div>
    </>
  )
}

export default MainNavigation