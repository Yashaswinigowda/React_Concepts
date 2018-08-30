/*
  parent component passes text data as props to child components.
  when a FirstChild and SecondChild class is created using normal react.Component, here FirstChild gets new data every time
  but Second Child gets same data everytime. even after getting the same data, second Child gets rendered repetatively.
  we can stop this unwanted re-rendering by using the pure components. Third child we created by extending the purecomponents, hence this component
  wont get re-rendered when we pass same data.
  here pure component does a shallow copy.
*/

import React, { PureComponent } from 'react';
// import SecondChild from './SecondChild';
// import FirstChild from './FirstChild';

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state={text: Math.random()};
  }
  componentDidMount(){
    setInterval(()=> this.setState({text: Math.random()}),1000);
  }
  render(){
    return(
      <div>
      <FirstChild text = {this.state.text} />
      <SecondChild text = "this is MSD" />
      <ThirdChild text = "this is MSD 2" />
      </div>
    );
  };
};

class FirstChild extends React.Component{
  render(){
    ///console.log('First Child');
    return(
      <div>
      {this.props.text}
      </div>
    );
  }
};

class SecondChild extends React.Component{
  render(){
    console.log('Second Child');
    return(
      <div>
      {this.props.text}
      </div>
    );
  }
};

class ThirdChild extends PureComponent{
  render(){
    console.log('Third Child');
    return(
      <div>
      {this.props.text}
      </div>
    );
  }
};

export default Parent;
