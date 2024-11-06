import { Link } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showCart = () => {
    setIsOpen(true);

    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }
  };

  const closeCart = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
    document.body.style.paddingRight = "0px";
  };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img
            src="https://www.kickgame.com/cdn/shop/t/232/assets/logo.svg?v=82041606861943327331696259183"
            alt=""
          />
        </Link>
      </Logo>
      <Icons>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-search w-10"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-user w-10 mx-auto"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div onClick={showCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-cart w-10"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>1</span>
        </div>
      </Icons>
      <div className={`backdrop ${isOpen && "active"}`}></div>
      <Cart isOpen={isOpen} closeCart={closeCart} />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: white;
  height: 66px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0 0 0 / 1);
`;

const Logo = styled.div`
  max-width: 200px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
  }
`;

const Icons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  div {
    cursor: pointer;
  }

  div:not(:last-child) {
    margin-right: 10px;
  }

  div:last-child {
    position: relative;

    span {
      position: absolute;
      top: -0.77rem;
      right: -0.7rem;
      background-color: rgb(0 0 0 / 1);
      color: rgb(255 255 255 / 1);
      border-radius: 9999px;
      min-width: 20px;
      min-height: 20px;
      width: 10px;
      height: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`;
