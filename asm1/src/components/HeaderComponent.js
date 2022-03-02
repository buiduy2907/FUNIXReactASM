import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                  <FontAwesomeIcon icon="fa-solid fa-users" />
                    <span>Nhân Viên</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/dept">
                  <FontAwesomeIcon icon="fa-solid fa-address-card" />
                    <span>Phòng Ban</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/salary">
                  <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />
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
