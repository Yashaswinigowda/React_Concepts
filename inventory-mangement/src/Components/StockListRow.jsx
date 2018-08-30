
import React from 'react';

const StockListRow = ({ stock, deleteIteam, onChange }) =>{
  return(
    <tr>
      <td>&nbsp;</td>
      <td>{stock.id}</td>
      <td>{stock.title}</td>
      <td>{stock.stock}</td>
      <td>{stock.expiryDate}</td>
      <td> <button onClick={onChange}> Change</button>  <button onClick={deleteIteam} > Delete </button> </td>
    </tr>
  );
}

export default StockListRow;
