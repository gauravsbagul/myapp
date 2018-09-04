import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
        constructor(props){
                super(props);
                console.log('[Persons.js]  inside Construtor' ,props);
              }
              componentWillMount(){
                console.log('[Persons.js]  inside commponentWllmount()');
              }
            componentDidMount(){
              console.log('[Prsons.js] insde componentDidMound()');
            }

 render () {
         console.log('[Persons.js] Inside Render()');
         return     this.props.persons.map((person,index ) => {
                return <Person  
                              click={() => this.props.clicked(index)}
                              name={person.name} 
                              age={person.age}   
                              key={person.id}    
                              changed={(event) => this.props.changed(event, person.id)} />
              });   
        }
}
      export default Persons;
