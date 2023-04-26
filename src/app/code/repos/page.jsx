import Link from 'next/link';
import React from 'react'
import {FaStar, FaGithub, FaCodeBranch, FaEye } from 'react-icons/fa'
import { resolve } from 'styled-jsx/css';



import RepoStyles from '../../styles/Repos.module.css'

async function fetchUser(url){
    const resposnse = await fetch(url)
    const res = await resposnse.json();
    return res;


}

const ReposPage = async() => {

    const gitUser ='https://api.github.com/users/matheusgosk8';
    const gitRepos ='https://api.github.com/users/matheusgosk8/repos';

    const users = await fetchUser(gitUser);
    const repos = await fetchUser(gitRepos);


  return (
    <div className={RepoStyles.reposPage}>
        <h1> Repositórios</h1>

        <div className={RepoStyles.reposList}>
            
            {
                repos.map((rep)=>(
                    <div key={rep.id} className ={RepoStyles.repoCard}> 
                    <Link className={RepoStyles.link} href= {`/code/repos/${rep.name}`}><h3> name: {rep.name}</h3></Link>
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
                    
                ))
            }
        </div>

    </div>
  )
}

export default ReposPage