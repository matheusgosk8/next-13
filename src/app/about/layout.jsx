import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1> Esta é a página de Sobre</h1>
        {children}
        <h1> Fim da página de sobre </h1>
    </div>
  )
}

export default layout