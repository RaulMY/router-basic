import React, { Component, Fragment } from 'react'


class NewStudent extends Component {

    state ={
        name: "",
        age: 0
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    createUser = () => {
        this.props.createStudent(this.state)
        this.props.history.push("/")
    }

    render() {
        return <div>
            <label>Nombre:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <label>Edad:</label>
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/>
            <button onClick={this.createUser}>Crear</button>
        </div>
    }
}

export default NewStudent;