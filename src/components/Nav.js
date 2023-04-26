'use client'

import React from 'react'
import NavStyles from '../app/styles/Nav.module.css'
import Link from 'next/link'

import { useState } from 'react'

const Nav = () => {
    const [state, setState]= useState('');
  return (
    <div className={NavStyles.navPage}>

        <div className={NavStyles.primaryLogo}>
            <h1>Next 13 Aplication</h1>
        </div>

        <div className={NavStyles.nav}>

            <div className={NavStyles.logo}>
                <Link href='/'> <h3>Logo </h3></Link>

            </div>

            <div className={NavStyles.navigation}>
                <Link className={NavStyles.link} href='/'> Home </Link>
                <Link className={NavStyles.link} href='/about'> Sobre </Link>
                <Link className={NavStyles.link} href='/about/team'> Time </Link>
            </div>

            <div className={NavStyles.options}>
                <label> Opções </label>
            </div>
           
        </div>


        
    </div>
  )
}

export default Nav