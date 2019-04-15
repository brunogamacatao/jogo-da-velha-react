import React, { Component } from "react";
import "./AppAula.css";

class AppAula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: [['','',''], ['','',''], ['','','']],
      pecaDaVez: '⭕'
    };
  }

  jogar = (x, y) => {
    let novoT = this.state.t.slice();
    novoT[x][y] = this.state.pecaDaVez; 
    let novaPeca = this.state.pecaDaVez === '❌' ? '⭕' : '❌';
    this.setState({
      t: novoT, 
      pecaDaVez: novaPeca
    });
  };

  render() {
    return (
      <>
        <h1>Jogo da Velha</h1>
        <div class="tabuleiro">
          <Casa valor={this.state.t[0][0]} onJogar={this.jogar} x={0} y={0}/>
          <Casa valor={this.state.t[0][1]} onJogar={this.jogar} x={0} y={1}/>
          <Casa valor={this.state.t[0][2]} onJogar={this.jogar} x={0} y={2}/><br/>
          <Casa valor={this.state.t[1][0]} onJogar={this.jogar} x={1} y={0}/>
          <Casa valor={this.state.t[1][1]} onJogar={this.jogar} x={1} y={1}/>
          <Casa valor={this.state.t[1][2]} onJogar={this.jogar} x={1} y={2}/><br/>
          <Casa valor={this.state.t[2][0]} onJogar={this.jogar} x={2} y={0}/>
          <Casa valor={this.state.t[2][1]} onJogar={this.jogar} x={2} y={1}/>
          <Casa valor={this.state.t[2][2]} onJogar={this.jogar} x={2} y={2}/><br/>
        </div>
        <h3>É a vez de {this.state.pecaDaVez}</h3>
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
      <div className="casa" 
           onClick={() => this.props.onJogar(this.props.x, this.props.y)}>
        {this.props.valor || "\u00A0"}
      </div>
    );
  }
}

export default AppAula;
