
import React from 'react';
import Data from './Data';
import OntherData from './OntherData';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchFiled: '',
      items: ['Narayana Garner','Marina Augstine','Nick Giannopoulos','Anita Gros'],
      filters: [],
      otherArray: []
    };
    this.handlechange = this.handlechange.bind(this);
    this.onValuesClick = this.onValuesClick.bind(this);
  }

  handlechange(event){
    this.setState ({ searchFiled: event.target.value });
    if(event.target.value.length > 2)
       this.getChip();
  }

  onValuesClick(value){
    this.setState({ otherArray: value });
    console.log(value);
  }

  getChip(){
    let planet = (this.state.items).filter(chips => chips.includes(this.state.searchFiled));
    this.setState ({ filters :planet });
  }

  render(){
    console.log(this.state.filters);
    return(
      <div>
        <p> Chips search bar </p>
        <input type="text" name='username' value={this.state.searchFiled} onChange={this.handlechange} placeholder="search for Chips"/>
        {this.state.filters.map(data =>{
          return <Data
                    data={data}
                    onValuesClick ={this.onValuesClick}
                  />;
        })}

        <p> Selected Chips </p>
          {this.state.otherArray}
      </div>
    );
  }
}

// {this.state.otherArray.map(data => {
//   return <OntherData
//             data={data}
//           />;
// })}

export default Search;
