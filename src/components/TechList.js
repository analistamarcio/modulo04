import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

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
