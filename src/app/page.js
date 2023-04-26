import Link from 'next/link'
import React from 'react'


const HomePage = () => {
  return (
    <div>
      <h1> Home Page</h1>

      <nav>
          <ul>
            <li> <Link className='links' href= '/'> Home </Link> </li>
            <li> <Link className='links' href= '/about'> About </Link> </li>
            <li> <Link className='links' href= '/about/team'> Team </Link> </li>
    
          </ul>

      </nav>

    </div>
  )
}

export default HomePage