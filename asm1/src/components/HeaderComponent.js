import { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";

class Header extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isNavOpen: false,
    };
    this.onHandleToggle = this.onHandleToggle.bind(this);
  }
  onHandleToggle() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.onHandleToggle}></NavbarToggler>
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" href="/staff">
                    <i class="fa fa-users" aria-hidden="true"></i> 
                    <span>Nhân Viên</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/dept">
                    <i class="fa fa-address-card-o" aria-hidden="true"></i>
                    <span>Phòng Ban</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/salary">
                    <i class="fa fa-money" aria-hidden="true"></i> 
                    <span>Bảng Lương</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
