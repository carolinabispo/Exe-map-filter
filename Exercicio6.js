import React from "react";

const Exercicio6 = () => {
  const cores = ["vermelho", "azul", "amarelo", "verde", "roxo"];


  const filteredColorsRed = cores.filter((item) => item.includes("vermelho"));
  const filteredColorsBlue = cores.filter((item) => item.includes("azul"));
  const filteredColorsYellow = cores.filter((item) => item.includes("amarelo"));
  //  console.log(filteredColorsRed);
  //  console.log(filteredColorsYellow);
  //  console.log(filteredColorsBlue);
  const red = filteredColorsRed.map((item, index) => (
    <div key={index}>{item}</div>
  ));

  const blue = filteredColorsBlue.map((item, index) => (
    <div key={index}>{item}</div>
  ));
  const yellow = filteredColorsYellow.map((item, index) => (
    <div key={index}>{item}</div>
  ));



  return (
    <div>
      <h2>Exercício 6</h2>
      <div>
        Cores primarias: {red} {blue} {yellow}
      </div>
    </div>
  );
};

export default Exercicio6;

//POR FAVOR THIAGO ME ENSINA UM JEITO  MAIS FACIL DE FAZER ISSO EU TE IMPLOROOOOOOOOOOO
