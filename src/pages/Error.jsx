import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <MainNavigation/>
        <main>
            <h1>An Error occured!</h1>
            <p>Go to <Link to='/'>Home Page</Link></p>
        </main>
    </div>
  )
}

export default ErrorPage