import React from 'react'

const Exercicio1 = () => {
    const nomes = ['Alice', 'Bob', 'Carol', 'David'];


  return (
    <div>
      <h1>Exercicio 1</h1>
        {nomes.map((nomes,index) =>(
          <div key={index}>
            <li>{nomes}</li>
          </div>
        ))}




    </div>
  )
}

export default Exercicio1
