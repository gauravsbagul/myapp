import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js]  inside Construtor' ,props);
    this.state= {
      persons: [
        { id:'id1', name:'Gaurav ', age: 25 },
        { id:'id2', name:'Suraj', age: 23 },
        { id:'id3', name:'Rohan', age: 21 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
  componentWillMount(){
    console.log('[App.js]  inside commponentWllmount()');
  }
componentDidMount(){
  console.log('[App.js] insde componentDidMound()');
}


  // state = {
  //   persons: [
  //     { id:'id1', name:'Gaurav ', age: 25 },
  //     { id:'id2', name:'Suraj', age: 23 },
  //     { id:'id3', name:'Rohan', age: 21 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }


// switchNameHandler =  (newName) => {
//     //  console.log("was clicked"); // works
//     // this.state.persons[0].name = 'gaurav sunil bagul'; //dosent work
//     this.setState({
//     persons: [
//       { name: 'Gaurav New ', age: 25 },
//       { name:'Suraj New', age: 23 },
//       { name:'Rohan New', age: 30 }
//     ]
//   })
// }

nameChangedHandler= (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = { 
    ...this.state.persons[personIndex]
  }; 
  //const person = Object.assign({},this.state.persons[personIndex]);
  // person.name = event.target.value;
  person.name = event.target.value;
  const persons = [...this.state.persons]
  persons[personIndex] = person;
  this.setState({person: persons })

    this.setState({
    persons: [
      { id: 'id1', name: 'Gaurav NewName ', age: 25 },
      { id: 'id2', name: event.target.value , age: 23 },
      { id: 'id3', name:'Rohan', age: 21 }
    ]
  })
}

deletePersonHandler = (personIndex) => {
// const persons = this.state.persons.slice();or
const  persons = [...this.state.persons];
persons.splice(personIndex,1);
this.setState({persons: persons})
}
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  render() {
    console.log('[App.js]inside render');

      // const style = {
      //   backgroundColor: 'green',
      //   color : 'white',
      //   font: 'inherit',
      //   border: '2px solid blue ',
      //   padding: '8px',
      //   cursor: 'poiter'
      //   // ':hover': {
      //   //   backgroundColor:'lightgreen',
      //   //   color: 'black'
      //   // }
      // };

      let persons = null;

      if(this.state.showPersons){
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
       //style.backgroundColor='red';
      // style[':hover']= {
      //   backgroundColor:' salmon ',
      //   color: 'black'
     // }
     }
      
// let classes = ['red', 'bold'].join(' '); 


    return (
      //<StyleRoot>
      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.persons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler} />
             {persons}
  </div>
 //</StyleRoot>
 
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Hi, I am React App</h1>
  //       <p>This is realy working!</p>
  //       <button>Swithc Name</button>
  //       <Person name="Gaurav" age="25"/>
  //       <Person name="Suraj" age="23"> My hobbies: Racing</Person>
  //       <Person name="Rohan" age="21"/>
  //     </div>
      
);
    // return React.createElement('div', null, 'h1', 'hi , I\'m a React App!!!');
    // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Does this work now?..'));
  }
}

// export default Radium(App);
export default App;
