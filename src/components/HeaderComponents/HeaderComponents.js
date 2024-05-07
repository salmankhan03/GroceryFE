import React from 'react';
import { Link } from "react-router-dom";
import ImageComponent from '../ImageComponents/ImageComponents';
import logo from "../../assets/images/logo.png"
import { useSelector } from 'react-redux';
import './HeaderComponents.css'; 


function Header() {
  const cartItems = useSelector(state => state.CartReducer.cartItems);
  const authData = useSelector(state => state?.AuthReducer?.userData);
    return (
        <div className="custom-header">
            <div className="ml-2 mr-2">
            <div className="row">
              <div className="col-lg-12 text-right">
                <div className="logo_container">
                  <Link to="/">
                    {/* Fashion<span>Cube</span> */}
                    <ImageComponent src={logo} alt="LOGO" />
                  </Link>
                </div>
                <nav className="navbar">
                  <ul className="navbar_menu">
                    <li>
                      <Link to="#">home</Link>
                    </li>
                    <li className="mega-drop-down">
                      {/* <a href="#">
                        shop <i className="fa fa-angle-down"></i>
                      </a> */}
                    <Link to="/Shop">shop</Link>

                    </li>
  
                    <li>
                      <a href="#">contact</a>
                    </li>
                  </ul>
                 
                  <ul className="navbar_user">
                    <li>
                      <a href="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </li>
                    {authData && authData?.id ? (
                    <li>
                      <Link to="/userProfile">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </Link>
                    </li>
                    ):null}
                    <li className="checkout">
                      <Link to="/cart">
                        <i className="fas fa-shopping-bag"></i>
                        {cartItems.length !== undefined && cartItems.length > 0 && (
                          <span id="checkout_items" className="checkout_items">
                            {cartItems.length}
                          </span>
                        )}

                      </Link>
                    </li>
                  </ul>
                  <div
                    className="hamburger_container"
                    // onClick={() => this.handleMenuClicked()}
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* <MediaQuery query={device.max.tabletL}>
            <MobileMenu
              activeClass={this.state.activeclass}
              onClose={() => this.handleMenuClicked()}
            />
          </MediaQuery>
          {this.state.modalShow ? (
            <HomeCartView
              cart={cart}
              show={this.state.modalShow}
              onHide={() => this.showHideModal()}
            />
          ) : null} */}
        </div>
      );
}

export default Header;
