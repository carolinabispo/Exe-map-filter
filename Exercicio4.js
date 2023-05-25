import React from 'react'

const Exercicio4 = () => {
    const usuarios = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 17 },
        { id: 3, nome: 'Carol', idade: 20 },
        { id: 4, nome: 'David', idade: 16 }
        ];


        // const filteredProducts = Product.filter((item) => item.peso > 50);
        const filteredUsers = usuarios.filter((item) =>item.idade >= 20)
  return (
    <div>
      <h1>Exercício 4</h1>
      {filteredUsers.map((user)=>(
        <div key={user.id}>
           Pessoas com idade superior ou igual a 20 anos: {`${user.nome}, idade: ${user.idade}`}
        </div>
      ))}
    </div>
  )
}

export default Exercicio4
