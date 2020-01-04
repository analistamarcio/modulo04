import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    // this.props, this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    // check if textbox isn't empty and if tech doesn't already exists
    if (this.state.newTech !== '' && this.state.techs.map(t => t.toLowerCase() === this.state.newTech.toLowerCase()).every(f => f === false)) {
      this.setState({ techs: [... this.state.techs, this.state.newTech] });
      // clear textbox
      this.setState({ newTech: '' })
    }
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter((t, i) => i !== this.state.techs.indexOf(tech) ) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((Technologies, index) => (
            <TechItem
              key={index}
              tech={Technologies}
              onDelete={() => this.handleDelete(Technologies)}
            />
          ))}
        </ul>
        <input
        type="text"
        onChange={this.handleInputChange}
        value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
