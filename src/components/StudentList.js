import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';


class StudentList extends Component {

    componentDidUpdate(){
        console.log('update')
    }
    render() {
        return <div>
            {
                this.props.list.map((student, i)=><p key={"student-2" + i}>
                        <Link  to={`/student/${i}`}>{student.name}</Link>
                    </p>)
            }
            <Link to={`/new-student`}>Nuevo</Link>
        </div>
    }
}

export default StudentList;