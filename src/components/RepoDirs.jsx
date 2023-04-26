import Link from 'next/link';
import React from 'react'

async function fetchRepoContents(name){
    const response = await fetch(
    `https://api.github.com/repos/matheusgosk8/${name}/contents`
    )

    await new Promise((resolve)=> setTimeout(resolve, 3000))
    const res = await response.json();
    return res;
}

const RepoDirs = async({name}) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content)=> content.type === 'dir');
  return (
    <>
        <h3> Directories</h3>
        <ul>
            {
                dirs.map((dir)=>(
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))
            }
        </ul>


    </>
  )
}

export default RepoDirs