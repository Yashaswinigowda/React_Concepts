
import React from 'react';

const AddForm = ({ course, allAuthors , onSave, onChange, saving , errors }) => {
  let inputStyle = {'width':'300px', 'top':'300px'}
  return(
    <form style={{'align':'center'}} className='form'>
      <input
        type="text"
        style={inputStyle}
        className="form-control" />
    </form>
  );
};


export default AddForm;
