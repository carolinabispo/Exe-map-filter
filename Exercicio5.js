import React from 'react'

const Exercicio5 = () => {
    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 30 },
        { id: 2, nome: 'Calça', preco: 70 },
        { id: 3, nome: 'Tênis', preco: 100 },
        { id: 4, nome: 'Boné', preco: 20 }
        ];

    const filteredProducts = produtos.filter((products) => products.preco > 30)
  return (
    <div>
      <h2>Exercício 5</h2>
      {filteredProducts.map((item) =>(
        <div key={item.id}> 
            Produtos com o preço acima de 30 reais: <li>{`Produto: ${item.nome}`} {`Preço: ${item.preco}`}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio5
