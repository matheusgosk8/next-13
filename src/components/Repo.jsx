import React from 'react'
import Link from 'next/link'
import RepoStyles from '../app/styles/Repo.module.css'
import {FaStar, FaGithub, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepo(name){
    const resposnse = await fetch(`https://api.github.com/repos/matheusgosk8/${name}`)
    const res = await resposnse.json();
    return res;
}


const RepoPage = async({name}) => {
    const rep = await fetchRepo(name);
  return (
    <div key={rep.id} className ={RepoStyles.repoCard}> 
                  
                    <Link className={RepoStyles.link} href= {`/code/repos/${rep.name}`}> name: {rep.name}</Link>
                    <p>{rep.description}</p>
                        <div className={RepoStyles.repoDetails}>
                            <span>  
                                <FaStar/> {rep.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch/> {rep.forks_count}
                            </span>
                            <span>
                                <FaEye/> {rep.watchers_count}
                            </span>
                            <span> 
                                <Link href={rep.html_url}><FaGithub/> </Link>    
                            </span>
                        </div>
                    </div>
  )
}

export default RepoPage