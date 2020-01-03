import React, { Component } from 'react';

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
    if (this.state.newTech !== '' && this.state.techs.indexOf(this.state.newTech) <0) {
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
          {this.state.techs.map((tech, index) => <li key={index} id={index}>
            {tech}
            <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
          </li>)}
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
