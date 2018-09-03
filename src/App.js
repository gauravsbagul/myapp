import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { name:'Gaurav ', age: 25 },
      { name:'Suraj', age: 23 },
      { name:'Rohan', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
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
  person.name = event.target.value;
  const persons = [...this.state.persons]
  persons[personIndex] = person;
  this.setState({person: persons })

    this.setState({
    persons: [
      { id: 'asfal', name: 'Gaurav NewName', age: 25 },
      { id: 'avdf1', name: event.target.value , age: 23 },
      { id: 'adsf1', name:'Rohan', age: 21 }
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
      let btnClass ='';

      if(this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map((person,index ) => {
            return <Person  
                          click={() => this.deletePersonHandler(index)}
                          name={person.name} 
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person 
             name={this.state.persons[0].name} 
             age={this.state.persons[0].age}/>
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this,'gauravsbagul')}
              changed = {this.nameChangedHandler}> My hobbies: Racing </Person>
          <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/> */}
        </div>
      );
       //style.backgroundColor='red';
      // style[':hover']= {
      //   backgroundColor:' salmon ',
      //   color: 'black'
     // }
     btnClass = classes.Red;
     }
      
// let classes = ['red', 'bold'].join(' '); 
const assignedClasses =[];
if(this.state.persons.length<=2){
  assignedClasses.push(classes.red); //classes =['red']
}
if(this.state.persons.length<=1){
  //kfhif;re
    // classes.pop('red');
  // classes.push('bold');
  assignedClasses.pop(classes.red);
  assignedClasses.push(classes.bold);
   //classes =['red' , 'bold'];
}

    return (
      //<StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I am React App</h1>
        <p className={assignedClasses.join(' ')}> This is realy working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Gaurav Sunil Bagul")}>Switch Name</button> or */}
        <button className= {btnClass}

        //style = {style}
        // onClick={()=> this.switchNameHandler('Gaurav Sunil Bagul!!')}>Switch Name</button>
             onClick={this.togglePersonHandler}>Toggle persons</button>
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
