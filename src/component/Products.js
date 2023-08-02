import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Products extends Component {
  render() {
    return (
      <div>
        <input type='search' placeholder='Serach'/>
        <nav className='nav2'>
            <Link to="new">New</Link>
            <Link to="best">Best</Link>
        </nav>
        <Outlet/>
      </div>
    )
  }
}

export default Products
