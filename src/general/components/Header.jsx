import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import AddButton from "./AddButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import appSlice from "../../redux/appSlice";

const links = ["Collection", "Men", "Women", "About", "Contact"];
const StyledModal = styled.div`
  width: 100%;

  height: 256px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 100px;
  display: ${(props) => {
    if (props.$modal) {
      return "grid";
    } else {
      return "none";
    }
  }};
  grid-template-rows: 67px 1fr;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);

  @media (width >=400px) {
    width: 360px;
  }
  @media (width>=640px) {
    top: 70px;
    right: 40px;
    transform: translateY(0);
  }
`;
const Span = styled.span`
  color: #1d2026;
  font-family: "Kumbh Sans";
  margin-left: 6px;
  font-weight: 700;
`;
const P = styled.p`
  color: #69707d;
  font-family: "Kumbh Sans";
  line-height: 26px; /* 162.5% */
  ${(props) => {
    if (props.$variant != "block") {
      return css`
        display: inline-block;
      `;
    }
  }}
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledItem = styled.li`
  font-weight: 700;
  &:active,
  &:hover {
    display: inline-block !important;
    background-color: transparent !important;
  }
  & > a:active,
  & > a:hover {
    display: inline-block !important;
    background-color: transparent !important;
  }
`;

const Header = () => {
  const modal = useSelector((state) => state.modal);
  const products = useSelector((e) => e.products);
  const dispatch = useDispatch();
  const badge = useSelector((state) => state.products);
  const count = badge.reduce((acc, i) => acc + i.count, 0);

  const handleDel = (e) => {
    dispatch(appSlice.actions.delProduct(e));
  };
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(appSlice.actions.setModal(!modal));
  };
  const handleCheck = () => {
    dispatch(appSlice.actions.checkOut());
  };
  return (
    <header className="flex py-[20px] px-6 justify-between sticky top-0 z-30 bg-white md:px-4 lg:px-0 lg:border-b border-secondary lg:py-8">
      <div className="flex gap-4 md:gap-10 items-center lg:gap-[56px]">
        <div className="drawer inline-block w-6 md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content inline-block w-6">
            <label htmlFor="my-drawer" className="inline-block w-6">
              <img src="/icon-menu.svg" className="w-4" />
            </label>
          </div>
          <div className="drawer-side z-40">
            <div className="menu p-6 w-80 min-h-full bg-base-200 text-base-content">
              <label htmlFor="my-drawer" aria-label="close sidebar">
                <img
                  src="/icon-close.svg"
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay w-6 mb-[53px]"
                />
              </label>

              <StyledList>
                {links.map((e, i) => (
                  <StyledItem key={i}>
                    <Link
                      to={"/"}
                      className="p-0 hover:bg-transparent active:bg-transparent inline-block"
                    >
                      {e}
                    </Link>
                  </StyledItem>
                ))}
              </StyledList>
            </div>
          </div>
        </div>
        <Link to={"/"}>
          <img src="/logo.svg" alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-5 items-center">
          {links.map((e, i) => (
            <li
              key={i}
              className="text-grey hover:text-black after:transition-all hover:after:scale-x-100 flex transition-all relative after:content-[''] after:scale-x-0 after:w-full after:h-1 after:bg-primary after:absolute after:-bottom-[19px] lg:after:-bottom-[41px] "
            >
              <Link to={"/"}>{e}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 lg:gap-11">
        <div className="relative text-white">
          <img
            src="/icon-cart.svg"
            alt="cart"
            className="cursor-pointer "
            onClick={handleClick}
          />
          {badge.length ? (
            <div className="w-6 h-auto text-[10px] text-white text-center rounded-xl -right-1/2 absolute -top-1/2 bg-primary">
              {count}
            </div>
          ) : null}
        </div>
        <div className="border-[3px] cursor-pointer  transition-all hover:border-primary rounded-full">
          <img src="/image-avatar.png" className="w-6 lg:w-10" />
        </div>
      </div>
      <StyledModal
        $modal={modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="border-b border-secondary flex items-center pl-6">
          <Span>Cart</Span>
        </div>
        <div className="p-6  grid grid-rows-[1fr_60px]">
          {products.length ? (
            <>
              {products.map((e) => (
                <div className="flex items-center gap-4">
                  <img src={e.url} alt="image" className="w-12 rounded-[4px]" />
                  <div className="flex items-center">
                    <div>
                      <P>{e.name}</P>
                      <P>
                        ${e.price}.00 x {e.count}
                      </P>
                      <Span>${e.price * e.count}.00</Span>
                    </div>
                    <img
                      src="/icon-delete.svg"
                      alt="delete"
                      onClick={() => handleDel(e.url)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))}
              <AddButton onClick={handleCheck}>Checkout</AddButton>
            </>
          ) : (
            <h1 className="flex items-center justify-center">
              Your cart is empty.
            </h1>
          )}
        </div>
      </StyledModal>
    </header>
  );
};

export default Header;
