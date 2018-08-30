
/* Example of Higher order components
 * written a HOC function which takes a component as a argument and returns the two properties for it
 *  1. count : count value to show up the counter increment on each click
 *  2. handleClickFuc : to handle the onClick call back function.
*/

import React from 'react';

/* The HocFunction which is responsible of incrementing the counter values.
 *  Adding 2 properties to inhertting components.
 *  return: BaseComponent by adding two properties
 *          a. counter: the state value which is maintaining the counter values
 *          b. incrementCounter: holds the call back function handleClickFuc. (which increment the states)
*/

const HocFunction = (BaseComponent) => class extends React.Component {
  constructor(){
    super();
    this.state ={
      count : 0
    }
  }

  handleClickFuc = () =>{
    this.setState({count: this.state.count+1});
  }

  render(){
    return(
      <BaseComponent counter={this.state.count} incrementCounter= {this.handleClickFuc}/>
    );
  }
}

/* Component : OnMOuseOverButton
 * Descriprion : a button which increments the counter values on MouseOver by calling the call back to the incrementCounter function
*/

const OnMOuseOverButton = (props) =>{
  return(
    <button
      onMouseOver= {props.incrementCounter}
      style={{'width':'10%', 'height':'150px', 'backgroundColor': 'red', 'fontSize':'1.5em'}}
    >
     count: {props.counter}
    </ button>
  );
}


/* Component : Button
 * Descriprion : a button which increments the counter values onClick of button by calling the call back to the incrementCounter function
*/

const Button = (props)=>{
  return(
    <button
      onClick= {props.incrementCounter}
      style={{'width':'10%', 'height':'150px', 'backgroundColor': 'red', 'fontSize':'1.5em'}}
    >
     count: {props.counter}
    </ button>
  );
}

const ButtonComponet = HocFunction(Button);  //
const OverButton = HocFunction(OnMOuseOverButton); //


/* Component : HocComponents
 * Descriprion : wrapping the child components i.e ButtonComponet and OverButton and hosting it
*/

const HocComponents = () =>{
  return(
    <div>
      <h3> Hoc Example program </h3>
          <ButtonComponet />
          <OverButton />
    </div>
  );
}
export default HocComponents;
