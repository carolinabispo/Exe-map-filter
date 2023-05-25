import React from 'react'

const Exercicio3 = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const pairNumbers = numeros.filter((item) => item %2 === 0)
  return (
    <div>
      <h2>Exercício 3</h2>
      {pairNumbers.map((num) => (
        <div>
            Números Pares: {`${ num}, `}
        </div>
      ))}
    </div>
  )
}

export default Exercicio3
