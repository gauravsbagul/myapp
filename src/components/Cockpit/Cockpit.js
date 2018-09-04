import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) =>{
    const assignedClasses =[];
    let btnClass =' '
    if(props.showPersons){
        btnClass = classes.Red;
    }

if(props.persons.length<=2){
  assignedClasses.push(classes.red); //classes =['red']
}
if(props.persons.length<=1){
    // classes.pop('red');
  // classes.push('bold');
  assignedClasses.pop(classes.red);
  assignedClasses.push(classes.bold);
   //classes =['red' , 'bold'];
}
    return(
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}> This is realy working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Gaurav Sunil Bagul")}>Switch Name</button> or */}
        <button className= {btnClass}

        //style = {style}
        // onClick={()=> this.switchNameHandler('Gaurav Sunil Bagul!!')}>Switch Name</button>
             onClick={props.clicked}>Toggle persons</button>
    </div>
    );
};

export default cockpit;