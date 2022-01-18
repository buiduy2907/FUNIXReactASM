import React, { Component } from 'react';
import StaffList from './components/StaffListComponent';
import {STAFFS} from './shared/staffs';
import {Navbar, NavbarBrand} from 'reactstrap'

class App extends Component{
  constructor(props){
    super(props);
  
    this.state={
      staffs : STAFFS
    }
  }
  render(){
    return(
      <div>
        <Navbar dark color='primary'>
            <NavbarBrand href="#">ỨNG DỤNG QUẢN LÍ NHÂN SỰ VER1</NavbarBrand>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    )
  }
}
export default App;
