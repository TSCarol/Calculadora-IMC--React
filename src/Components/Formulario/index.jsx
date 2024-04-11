import React, {useState} from "react";
import styles from "./Formulario.module.css"

function Formulario() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultadoIMC, setResultadoIMC] = useState('');
  
  
    const calcularImc = () => {
      const alturaMetros = altura / 100;
      const imc = peso / (alturaMetros * alturaMetros);
      setResultadoIMC(imc.toFixed(2));
    };
  
    const getClassificacaoDoImc = () => {
      if(!resultadoIMC) return '';
  
      if (resultadoIMC < 18.5 ) {
        return 'Abaixo do peso';
      } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
        return 'Peso normal';
      } else if (resultadoIMC >= 25  && resultadoIMC < 30) {
        return 'Sobrepeso';
      } else if (resultadoIMC >= 30 && resultadoIMC < 35) {
        return 'Obesidade grau I';
      } else if (resultadoIMC >= 35 && resultadoIMC < 40) {
        return 'Obesidade grau II (Severa)';
      } else if (resultadoIMC >= 40) {
        return 'Obesidade grau III(Mórbida';
      }
    };


    return (
       <div className={styles.container}>
            <h1 className={styles.titulo}>Calculadora de IMC </h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo de 18.5</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>18.5 a 24.9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>25 a 30</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>30 a 35</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr>
                        <td>35 a 40</td>
                        <td>Obesidade grau II /Severa</td>
                    </tr>
                    <tr>
                        <td>Maior que 40</td>
                        <td>Obesidade grau III /Mórbida</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.calculator}>
                <label className={styles.espaco}> Altura em cm: </label>
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
                <label className={styles.espaco}> Peso em kg:</label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                <button className={styles.button} onClick={calcularImc}>Calcular</button>
            </div>
            {resultadoIMC && (
                <div>
                    <p> O seu IMC é: {resultadoIMC}</p>
                    <p>Classificação: {getClassificacaoDoImc()}</p>
                </div>
            )}
       </div>
    )
}

export default Formulario; 