import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import NotFound from './components/NotFound';
import StudentCard from './components/StudentCard';
import NewStudent from './components/NewStudent';
import { Switch, Route, NavLink } from 'react-router-dom';
import students from './students.json'

class App extends Component {

  state= {
    studentsList: students
  }

  createStudent = (newStudent) => {
    this.setState({studentsList: [...this.state.studentsList, newStudent]})
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
      <NavLink exact to="/" activeStyle={{fontWeight: 'bold', color: 'red' }}>Lista</NavLink>
        <NavLink to="/student" activeStyle={{fontWeight: 'bold', color: 'red' }}>Especifico</NavLink>
        <Switch>
          <Route exact path="/" component={(props)=><StudentList {...props} list={this.state.studentsList}/>}/>
          <Route exact path="/student/:studentId" component={(props)=><StudentCard {...props} list={this.state.studentsList}/>}/>
          <Route exact path="/new-student" component={(props)=><NewStudent {...props} createStudent={this.createStudent}/>}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
