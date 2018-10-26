
/* 
Component: InputBox
Discription: Input box that Accepts only 10 digits phone numbers
*/

import * as React from 'react';

class InputBox extends React.Component<any, any>{
    constructor(props:any){
     super(props);
     this.state = {
         inputValue: ''
     };
    }
    // event: React.ChangeEvent<HTMLSelectElement>
    // event:React.KeyboardEvent<HTMLInputElement>
    isNumberValidation = (event: any) => {
        let currentValue = event.target.value;  // this value will trigger based on onChange event.
        let value =  this.isNumberOnlyCheck(event);  
        
         if(value){
             /* Update if it's only number and less than 10 digits */
            if((currentValue.match(/^\d+$/) || currentValue == '') && (event.target.value.length < 11)){
                this.setState({inputValue: event.target.value});
            }
        }     
    }

    isNumberOnlyCheck = (event: any) => {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        }  else if ( key < 48 || key > 57 ) {
            /* Number keyCodes falls between 48-57*/
            return false;
        } else {
            return true;
        }
    }

   /** 
       isNumberOnlyCheck = (event: any) => {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
            // Allow: Ctrl+V
            ((event.ctrlKey == true || event.metaKey) && (event.which == '118' || event.which == '86')) ||  
            // Allow: Ctrl+c
            ((event.ctrlKey == true || event.metaKey) && (event.which == '99' || event.which == '67')) || 
            // Allow: Ctrl+A
            (event.keyCode == 65 && (event.ctrlKey === true || event.metaKey)) || 
         // Allow: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39)) {
             // let it happen, don't do anything
             return true;
      }
    else {
        // Ensure that it is a number and stop the keypress
        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault(); 
            return false
        }   
        return true;
    }
    } **/

    render(){
        return(
            <input 
                type="tel"
                value={this.state.inputValue}
                onKeyDown={(event: any) => this.isNumberValidation(event)}
                onChange={(event:any) => this.isNumberValidation(event)}
            />
        );
    }
}


export default InputBox;
