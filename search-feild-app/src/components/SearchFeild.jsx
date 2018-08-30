// import React from 'react';
// import ChipInput from 'material-ui-chip-input'
//
// class SearchFeild extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchFiled: '',
//       items: ['Narayana Garner','Marina Augstine','Nick Giannopoulos','Anita Gros'],
//       filters: []
//     };
//     this.handlechange = this.handlechange.bind(this);
//     this.getChip = this.getChip.bind(this);
//   }
//   handlechange(event){
//   this.setState ({ searchFiled: event.target.value });
//   if(event.target.value.length > 2)
//      this.getChip();
//   }
//
//   getChip(){
//     let planet = (this.state.items).filter(chips => chips.includes(this.state.searchFiled));
//     this.setState ({ filters :planet });
//   }
//
//   render(){
//     return(
//       <ChipInput
//         value={this.state.items}
//          className="custom-class"
//         onRequestAdd={(chip) => this.handlechange(chip)}
//         onRequestDelete={(chip, index) => this.handlechange(chip, index)}
//      />
//     );
//   }
// }
//
// export default SearchFeild;
