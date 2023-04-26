import React from 'react'
import RepoStyles from '../../../styles/Repo.module.css'
import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'
import Link from 'next/link'



const RepoPage = ({params: {name}}) => {
  return (
    <div className={RepoStyles.card}>
          <Link className={RepoStyles.button} href='/code/repos'> Voltar para os repositórios </Link>
        <Repo name={name}/>
        <RepoDirs name={name}/>

    </div>
  )
}

export default RepoPage