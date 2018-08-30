
import React from 'react';
import { stockDetails } from './MockData';
import StockListRow from './StockListRow';
import '../App.css';


class InventoryManagement extends React.Component{
  constructor(){
    super();
    this.state ={
      stockDetailsValue: Object.assign([], stockDetails)
    }

  }

deleteIteam = (index, e) =>{
  let stockDetails = Object.assign([], this.state.stockDetailsValue);
  stockDetails.splice(index, 1);
  this.setState({ stockDetailsValue: stockDetails});
}

  render(){
    const { stockDetailsValue } = this.state;
    return (
      <table className="customers">
        <thead>
          <tr>
             <th>&nbsp;</th>
             <th> Code </th>
             <th> Product </th>
             <th> Stock </th>
             <th> Expiry date </th>
             <th> Actions </th>
          </tr>
        </thead>
        <tbody>
        {
          stockDetailsValue.map((stock, index) =>
           <StockListRow key={stock.id} stock={stock} deleteIteam={ ()=>this.deleteIteam(index)}/>
           )
        }
        </tbody>
        </table>
    );
  }
}

 // <StockListRow key={stock.id} stock={stock} deleteIteam={this.deleteIteam.bind(this, index)}/>

export default InventoryManagement;
