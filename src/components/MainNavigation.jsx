import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useSelector } from 'react-redux'

const MainNavigation = () => {
    const {items} = useSelector((state) => state.cart);
    const {favItems} = useSelector((state) => state.favorites);
  return (
    <>
    <header className="custom-container bg-white flex items-center justify-between h-[72px]">
        <nav>
            <ul className={`${classes.list} flex items-center gap-2 md:gap-8`}>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? classes.active : undefined}
                        end 
                    >
                        <img src="/images/logo.png" className='md:h-14 h-10  object-contain' alt="" />
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
            <Link to='/favorites'>
                <div className="flex relative">
                    <img className='w-8' src="/images/heart-black.png" alt="" />
                    &nbsp;
                    <span className="absolute px-2 flex items-center justify-center bg-red-500 text-white border rounded-md border-black -top-2 -right-4 text-sm font-bold">{favItems.length}</span>
                </div>
            </Link>
            <img className='w-7 hidden md:block' src="/images/user.png" alt="" />
            <Link to='/cart'>
                <div className="flex relative">
                    <img className='w-8' src="/images/cart.png" alt="" />
                    &nbsp;
                    <span className="absolute px-2 flex items-center justify-center bg-yellow-400 bg-opacity-60 border rounded-md border-black -top-2 -right-4 text-lg font-bold">{items.length}</span>
                </div>
            </Link>
        </div>
    </header>
    <div className='custom-container bg-white h-[50px] flex items-center justify-between border-t sticky top-0 z-50'>sub header</div>
    </>
  )
}

export default MainNavigation