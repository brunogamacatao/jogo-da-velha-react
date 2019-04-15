import React, { useState, useContext } from 'react';
import './App.css';

const JogoContext = React.createContext();

function JogoProvider(props) {
    const [pecaDaVez, setPecaDaVez] = useState('❌');
    const [valores, setValores] = useState([['','',''], ['','',''], ['','','']]);
  
    const joga = (x, y) => {
      let valoresClone = valores.slice();
      valoresClone[x][y] = pecaDaVez;
      setValores(valoresClone);
      setPecaDaVez(pecaDaVez === '❌' ? '⭕' : '❌');
    };
  
    return (
      <JogoContext.Provider value={{
        state: { pecaDaVez, valores},
        joga
      }}>
        {props.children}
      </JogoContext.Provider>
    );
    
};

function AppFnCtx() {
  return (
    <JogoProvider>
      <h1>Jogo da Velha</h1>
      <Tabuleiro/>
      <br/>
      <JogoContext.Consumer>
        { ctx => (<h3>É a vez de {ctx.state.pecaDaVez}</h3>)}
      </JogoContext.Consumer>
    </JogoProvider>
  );
}

function Tabuleiro() {
  return (
    <>
      <div className="linha">
        <Casa x={0} y={1}/>
        <Casa x={0} y={0}/>
        <Casa x={0} y={2}/>
      </div>
      <div className="linha">
        <Casa x={1} y={0}/>
        <Casa x={1} y={1}/>
        <Casa x={1} y={2}/>
      </div>
      <div className="linha">
        <Casa x={2} y={0}/>
        <Casa x={2} y={1}/>
        <Casa x={2} y={2}/>
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

export default AppFnCtx;
