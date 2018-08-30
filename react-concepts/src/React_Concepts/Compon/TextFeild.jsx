import React from 'react';

const MockData = {
  items: [{
    "name": "person_name",
    "label": "Person's name",
    "type": "TextFeild",
    },{
    "name": "states",
    "label": "Person's State",
    "type": "DropDown",
    "values": ["Maharastra","Kerala","Tamil Nadu"],
  }]
}

class TextFeild extends React.Component{
  render(){
    return(
      <div> {MockData.items.map( data => <GetView data={data} />)}
      </div>
    );
  }
}

export default TextFeild;


const GetView = ({ data }) =>{
  switch(data.type){
    case 'TextFeild':
        return InputView(data);
    case 'DropDown':
        return DropDown(data);
    }
}



const InputView = (data) =>{
  return (
    <div>
      <label> {data.label} </label>
      <input type='input' />
    </div>
  );
}


const DropDown = (data) =>{
  return (
    <div>
      <label> {data.label} </label>
      <select>
        { data.values.map(data => <option>{data}</option>) }
      </select>
  </div>
  )
}
