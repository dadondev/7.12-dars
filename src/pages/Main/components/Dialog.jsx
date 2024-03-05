import { useState } from "react";
import styled, { css } from "styled-components";

const StyledModal = styled.dialog`
  height: 100%;
  background-color: transparent;
  border: none;
  position: relative;
  &:active {
    border: none;
    outline: none;
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.75);
  }
`;

const urls = [
  "/image-product-1.jpg",
  "/image-product-2.jpg",
  "/image-product-3.jpg",
  "/image-product-4.jpg",
];

const StyledDiv = styled.div`
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
const Main = styled.div`
  width: 650px;
  max-height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 500;
  border-radius: 15px;

  & > img {
    max-height: 550px !important;
    border-radius: 15px;
  }
`;
const Button = styled.button`
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  top: 50%;
  transform: translateY(-50%);
  height: 56px;
  border-radius: 50%;
  ${(props) => {
    if (props.next) {
      return css`
        right: 26px;
      `;
    } else {
      return css`
        left: 26px;
      `;
    }
  }}
`;

const Dialog = () => {
  const [active, setActive] = useState(urls[0]);
  const handleClick = (type) => {
    const i = urls.findIndex((e) => e == active);
    if (type == "minus") {
      setActive(urls[i - 1] ? urls[i - 1] : urls.at(-1));
    } else if (type == "plus") {
      setActive(urls[i + 1] ? urls[i + 1] : urls[0]);
    } else {
      setActive(type);
    }
  };
  return (
    <StyledModal id="hello">
      <StyledDiv>
        <form className="flex justify-end w-[600px] mb-1" method="dialog">
          <button>
            <img
              src="/icon-close.svg"
              alt="logo"
              className="hover:text-primary text-primary"
            />
          </button>
        </form>
        <Main>
          <Button
            onClick={() => {
              handleClick("minus");
            }}
          >
            <img src="/icon-previous.svg" />
          </Button>
          <img src={active} alt="logo" />
          <Button
            next
            onClick={() => {
              handleClick("plus");
            }}
          >
            <img src="/icon-next.svg" next />
          </Button>
        </Main>
        <div className="w-full mt-10 h-[88px] flex gap-[31px] items-center justify-center">
          {urls.map((e, i) => (
            <img
              src={e}
              key={i}
              onClick={() => handleClick(e)}
              className={`w-[88px] rounded-[10px] cursor-pointer text-white ${
                active == e ? "opacity-60" : "hover:opacity-70"
              }`}
            />
          ))}
        </div>
      </StyledDiv>
    </StyledModal>
  );
};

export default Dialog;
