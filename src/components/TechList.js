import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [],
    };

    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if (techs) {
            this.setState({ techs: JSON.parse(techs) });
        } 
    }

    componentDidUpdate(_, prevState) {
        const { techs } = this.state;
        if (prevState.techs !== techs) {
            localStorage.setItem('techs', JSON.stringify(techs));
        }
    }

    handleInputChange = e => {
        this.setState({newTech: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const { techs, newTech } = this.state;
        
        this.setState({
            techs: [...techs, newTech],
            newTech: '',
        });
    }

    handleDelete = tech => {
        const { techs } = this.state;
        this.setState({ techs: techs.filter(t => t !== tech)});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem 
                            key={tech} 
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}/>
                    ))}
                </ul>
                <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}/>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;