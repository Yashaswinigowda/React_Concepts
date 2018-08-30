
/*
  Components to Explain how the 'refs' can be used in both stateless and satefull components.
  And also how to use them if they are in the parent clasess.

  Onclick of enter the focus moves from one input element to another this can done using refs
*/

import React from 'react';


class Refs_Dom extends React.Component{

  handleSave = () =>{
    this.firstName.focus()
    console.log(this.firstName.value);
  }

  onKeyUpFun = (e, firstName) =>{
    console.log(e.keyCode);
    if(e.keyCode === 13){
      switch (firstName) {
        case 'firstName': this.lastName.focus();
                          break;
        case 'lastName': this.age.focus();
                          break;
        case  'age': this.save.focus();
                        break;
        default: this.firstName.focus();
                break;

      }
    }
  }
  render(){
    return(
      <div>
        <h1> Press enter the focus moves from one text box to another</h1>
        <RefWithStatelessComponent />

      <h5> This is statefull component </h5>
        <div>
          <span> First Name</span>
          <input type='text' ref={(input)=> this.firstName = input} onKeyUp={(e) => this.onKeyUpFun(e, 'firstName')}/>
        </div>
        <div>
          <span> Last Name</span>
          <input type='text' ref={(input)=> this.lastName = input} onKeyUp={(e) => this.onKeyUpFun(e, 'lastName')}/>
        </div>
        <div>
          <span> Age</span>
          <input type='text' ref={(input)=> this.age = input} onKeyUp={(e) => this.onKeyUpFun(e, 'age')}/>
        </div>
        <input type='submit' ref={(input)=> this.save = input} onClick={this.handleSave} onKeyUp={(e) => this.onKeyUpFun(e, 'firstName')}/>

        <div>
          <h5> Passing refs from patrent to child clisk submmit the focus comes to textbox </h5>
          <ParentToChild />
        </div>

        <div>
          <h2> Calling child's method from Parent </h2>
          <Parent />
        </div>
      </div>
    );
  }
}

export default Refs_Dom;


/* The following is the example of How to use refs in state less components */

const RefWithStatelessComponent = () =>{
  let inputRef = null, inputTwoRef = null;

  let handleSave = () =>{
    inputRef.focus();
  }

  let onKeyUpFun = (e, inputName) =>{
    if(e.keyCode === 13){
      if(inputName == 'inputRef'){
        inputTwoRef.focus();
      }
      else{
        inputRef.focus();
      }
    }
  }

  return(
    <div>
      <span> StateLess Component </span>
      <input type='input' ref={(input) => {inputRef =input}} onKeyUp={(e)=> {onKeyUpFun(e, 'inputRef')}} />
      <input type='input' ref={(input) => {inputTwoRef =input}} onKeyUp={(e)=> {onKeyUpFun(e, 'inputTwoRef')}} />
      <input
        type='submit'
        value='submit'
        onClick={handleSave}/>
    </div>
  );
}




/* The following is the example of How to use refs of Child component in less components */


const ParentToChild = () =>{
  let Employee_Id = null;

  let handleSave = () =>{
    Employee_Id.focus();
    console.log("childRef  "+Employee_Id.value);
  }

  return (
  <div>
    <Child refPointer={(input) => {Employee_Id =input} }/>
    <input
      type='submit'
      value='submit'
      onClick={handleSave}/>
  </div>
  );
}

const Child = ({ refPointer }) =>{
  return(
    <div>
      <span> Employee_Id  </span>
      <input type='input' ref={refPointer} />
    </div>
  );
}



/*
* Handling Child methods from parent component in React
* LINK:  https://stackoverflow.com/questions/37949981/call-child-method-from-parent
*/



class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child2 ref={instance => { this.child = instance; }} />
        <button onClick={() => { this.child.getAlert(); }}>Click</button>
      </div>
    );
  }
}

class Child2 extends React.Component {
  getAlert() {
    alert('clicked');
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}
