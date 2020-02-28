import React, { Component } from 'react'
import students from '../students.json'
import { Link } from 'react-router-dom';
import queryString from 'query-string'

class StudentCard extends Component {

    constructor(props) {
        super(props)

        console.log(props)
        this.params = props.match.params;
        this.values = queryString.parse(props.location.search)
        console.log(this.values)
    }

    goBack = () => {
        this.props.history.go(1)
    }

    render() {
        const student = this.props.list[this.params.studentId];
        if (!student) {
            return null;
        }
        return <div style={{color: this.values.color, fontSize: this.values.fontSize}}>
            Nombre: {this.props.list[this.params.studentId].name}
            Edad: {this.props.list[this.params.studentId].age}
            <Link to="/">Regresar</Link>
            <button onClick={this.goBack}>Regresar sin link</button>
        </div>
    }
}

export default StudentCard