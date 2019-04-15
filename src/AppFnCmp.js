import React, { useState } from 'react';
import './App.css';

function AppFnCmp() {
  const [pecaDaVez, setPecaDaVez] = useState('❌');
  const [valores, setValores] = useState([['','',''], ['','',''], ['','','']]);

  const joga = (x, y) => {
    let valoresClone = valores.slice();
    valoresClone[x][y] = pecaDaVez;
    setValores(valoresClone);
    setPecaDaVez(pecaDaVez === '❌' ? '⭕' : '❌');
  };

  return (
    <>
      <h1>Jogo da Velha</h1>
      <Tabuleiro valores={valores} onJoga={joga}/>
      <br/>
      <h3>É a vez de {pecaDaVez}</h3>
    </>
  );
}

function Tabuleiro({valores, onJoga}) {
  return (
    <>
      <div className="linha">
        <Casa valores={valores} x={0} y={1} onJoga={onJoga}/>
        <Casa valores={valores} x={0} y={0} onJoga={onJoga}/>
        <Casa valores={valores} x={0} y={2} onJoga={onJoga}/>
      </div>
      <div className="linha">
        <Casa valores={valores} x={1} y={0} onJoga={onJoga}/>
        <Casa valores={valores} x={1} y={1} onJoga={onJoga}/>
        <Casa valores={valores} x={1} y={2} onJoga={onJoga}/>
      </div>
      <div className="linha">
        <Casa valores={valores} x={2} y={0} onJoga={onJoga}/>
        <Casa valores={valores} x={2} y={1} onJoga={onJoga}/>
        <Casa valores={valores} x={2} y={2} onJoga={onJoga}/>
    </div>
    </>
  );
}

function Casa({valores, onJoga, x, y}) {
  return (
    <div className="casa" onClick={() => onJoga(x, y)}>
      {valores[x][y] || "\u00A0"}
    </div>
  );
}

export default AppFnCmp;
