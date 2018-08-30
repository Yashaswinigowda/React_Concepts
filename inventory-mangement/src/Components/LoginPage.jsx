
import React from 'react';
import InventoryManagement from './InventoryManagement';
import AddForm from './AddForm';
import '../App.css';
import MainBg from '../Graphics/main_bg.png';

class LoginPage extends React.Component{
  constructor(props)
    {
      super(props);
      this.state = {
          username: '',
          password: '',
          nextPage: false
      }
      this.onSave = this.onSave.bind(this);
      this.getUserDetails = this.getUserDetails.bind(this);
      this.onSave = this.onSave.bind(this);
    }

    onSave(){
        if(this.state.username && this.state.password){
            this.setState({ nextPage: true });
        }
    }

    getUserDetails(event){
        let getEvent = event.target.name;
        if(getEvent == 'password'){
          this.setState({ password: event.target.value });
        }
        else{
          this.setState({ username: event.target.value });
        }
    }

  render(){
    const {nextPage} = this.state;

    let AboutInventory = {
     backgroundImage: `url(${MainBg}) `,
     backgroundSize:'100% 100%',
     backgroundRepeat: 'no-repeat',
     width: '65%',
     height: '1000px',
     position: 'relative',
     float: 'left'
    }

    return(
        <div >
        { nextPage ? <InventoryManagement /> :
          <div>
            <div className='App-Header' style={AboutInventory}>
              <div className='About-inventory'> Inventory management software </div>
            </div>
          <div style={{ 'margin': '50% 50% 50% 50%'}}>
            <h3> LoginPage </h3>
            <label>  UserName </label>
            <input type="text" name='username'  placeholder="Enter Email Id" value={this.state.username} onChange={this.getUserDetails} required />
            <input type="text" name='password'  placeholder="Password" value={this.state.password} onChange={this.getUserDetails} required />
              <input
                type="Submit"
                value='Save'
                onClick = {this.onSave}
                />
          </div>
        </div>
        }
        </div>
    );
  }
}


export default LoginPage;
