import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ImageComponent from '../ImageComponents/ImageComponents';
import logo from "../../assets/images/logo.png"
import { useSelector } from 'react-redux';
import './HeaderComponents.css';
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #fff  ;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; /* Ensure the position context for absolute positioning */
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: #000000;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 25px;
    cursor: pointer;
    z-index: 999; /* Ensure the toggle button is above other elements */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
    ul{
      padding-left:0px !important
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: #d94945;
      border-radius: 4px;
    }
    @media screen and (max-width: 768px) {
      border-bottom: 1px solid #ccc; /* Add bottom border */
      width: 90%;
      margin-left:20px !important;
      padding-right:0px !important;
      padding:10px
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: #000000;
    display: block;
    padding: 10px 10px;
    font-size: 18px;
  }
  .nav-menu-list {
    &:hover {
      color: #fff;
    }
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    // margin-top: 5px;
    position: absolute;
    top: 74px;
    left: 0;
    background-color: #fff;
    z-index: 998;
  }
`;


function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const cartItems = useSelector(state => state.CartReducer.cartItems);
  const authData = useSelector(state => state?.AuthReducer?.userData);
  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to="/" onClick={handleToggleOpen}>
            <ImageComponent src={logo} alt="LOGO" />
          </Link>
        </div>
        <NavManu isToggleOpen={isToggleOpen}>
          <li style={{paddingLeft:15,paddingRight:15}}>
            <Link to={"/home"} className="nav-menu-list" onClick={handleToggleOpen}>
              Home
            </Link>
          </li>
          <li style={{paddingLeft:15,paddingRight:15}}>
            <Link to={"/aboutUs"} className="nav-menu-list" onClick={handleToggleOpen}>
              About Us
            </Link>
          </li>
          <li style={{paddingLeft:15,paddingRight:15}}>
            <Link to={"/Shop"} className="nav-menu-list" onClick={handleToggleOpen}>
              Shop
            </Link>
          </li>
          <li style={{paddingLeft:15,paddingRight:15}}>
            <Link to={"/faq"} className="nav-menu-list" onClick={handleToggleOpen}>
              Faq
            </Link>
          </li>
          <li style={{paddingLeft:15,paddingRight:35}}>
            <Link to={'/contactUs'} className="nav-menu-list" onClick={handleToggleOpen}>
              Contact
            </Link>
          </li>

          <li>
            <a href="#" className="nav-menu-list">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
          </li>
          {authData && authData?.id ? (
            <li>
              <Link to="/userProfile" className="nav-menu-list" onClick={handleToggleOpen}>
                <i className="fa fa-user" aria-hidden="true"></i>
              </Link>
            </li>
          ) : null}
          <li className="checkout">
            <Link to="/cart" className="nav-menu-list" onClick={handleToggleOpen}>
              <i className="fas fa-shopping-bag"></i>
              {cartItems.length !== undefined && cartItems.length > 0 && (
                <span id="checkout_items" className="checkout_items">
                  {cartItems.length}
                </span>
              )}

            </Link>
          </li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
}

export default Header;
