import React, { useState, useContext } from 'react';
import './App.css';

const CONFIGS_VITORIA = [
  '111000000','000111000','000000111',
  '100100100','010010010','001001001',
  '100010001','001010100'
];

const JogoContext = React.createContext();

function JogoProvider(props) {
    const [pecaDaVez, setPecaDaVez] = useState('❌');
    const [valores, setValores] = useState([['','',''], ['','',''], ['','','']]);
    const [status, setStatus] = useState('É a vez de ' + pecaDaVez);
    const [fim, setFim] = useState(false);
  
    const joga = (x, y) => {
      if (fim) {
        reinicia();
      } else {
        let valoresClone = valores.slice();
        valoresClone[x][y] = pecaDaVez;
        setValores(valoresClone);
        if (ganhou()) {
          setStatus(pecaDaVez + ' ganhou');
          setFim(true);
        } else {
          setPecaDaVez(getOutraPeca());
          setStatus('É a vez de ' + pecaDaVez);
        }
      }
    };

    const ganhou = () => {
      let outraPeca = getOutraPeca();
      let valoresStr = '';
      valores.forEach(linha => {
        linha.forEach(valor => {
          valoresStr += (valor === '' || valor === outraPeca) ? '0': '1';
        });
      });
      return CONFIGS_VITORIA.includes(valoresStr);
    };

    const reinicia = () => {
      setValores([['','',''], ['','',''], ['','','']]);
      setFim(false);
    };

    const getOutraPeca = () => pecaDaVez === '❌' ? '⭕' : '❌';
  
    return (
      <JogoContext.Provider value={{
        state: { pecaDaVez, valores, status},
        joga
      }}>
        {props.children}
      </JogoContext.Provider>
    );
    
};

function AppFinal() {
  return (
    <JogoProvider>
      <h1>Jogo da Velha</h1>
      <Tabuleiro/>
      <br/>
      <JogoContext.Consumer>
        { ({state: {status}}) => (<h3>{status}</h3>)}
      </JogoContext.Consumer>
    </JogoProvider>
  );
}

function Tabuleiro() {
  return (
    <>
      <div className="linha">
        <Casa x={0} y={0}/><Casa x={0} y={1}/><Casa x={0} y={2}/>
      </div>
      <div className="linha">
        <Casa x={1} y={0}/><Casa x={1} y={1}/><Casa x={1} y={2}/>
      </div>
      <div className="linha">
        <Casa x={2} y={0}/><Casa x={2} y={1}/><Casa x={2} y={2}/>
    </div>
    </>
  );
}

function Casa({x, y}) {
  const { state: {valores}, joga } = useContext(JogoContext);
  return (
    <div className="casa" onClick={() => joga(x, y)}>
      {valores[x][y] || "\u00A0"}
    </div>
  );
}

export default AppFinal;
