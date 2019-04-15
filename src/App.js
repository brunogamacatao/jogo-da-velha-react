import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pecaDaVez: '❌',
      valores: [['','',''], ['','',''], ['','','']]
    };
  }

  joga = (x, y) => {
    let valores = this.state.valores.slice();
    valores[x][y] = this.state.pecaDaVez;
    this.setState({
      valores: valores,
      pecaDaVez: (this.state.pecaDaVez === '❌' ? '⭕' : '❌')
    });
  };

  render() {
    return (
      <>
        <h1>Jogo da Velha</h1>
        <Tabuleiro valores={this.state.valores} onJoga={this.joga}/>
        <br/>
        <h3>É a vez de {this.state.pecaDaVez}</h3>
      </>
    );
  }
}

class Tabuleiro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="linha">
          <Casa valores={this.props.valores} x={0} y={0} onJoga={this.props.onJoga}/>
          <Casa valores={this.props.valores} x={0} y={1} onJoga={this.props.onJoga}/>
          <Casa valores={this.props.valores} x={0} y={2} onJoga={this.props.onJoga}/>
        </div>
        <div className="linha">
          <Casa valores={this.props.valores} x={1} y={0} onJoga={this.props.onJoga}/>
          <Casa valores={this.props.valores} x={1} y={1} onJoga={this.props.onJoga}/>
          <Casa valores={this.props.valores} x={1} y={2} onJoga={this.props.onJoga}/>
        </div>
        <div className="linha">
          <Casa valores={this.props.valores} x={2} y={0} onJoga={this.props.onJoga}/>
          <Casa valores={this.props.valores} x={2} y={1} onJoga={this.props.onJoga}/>
          <Casa valores={this.props.valores} x={2} y={2} onJoga={this.props.onJoga}/>
      </div>
      </>
    );
  }
}

class Casa extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="casa" onClick={() => this.props.onJoga(this.props.x, this.props.y)}>
        {this.props.valores[this.props.x][this.props.y] || "\u00A0"}
      </div>
    );
  }
}


export default App;
