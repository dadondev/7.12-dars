import styled from "styled-components";
import Counter from "./Counter";
import Tablet from "../../../general/utils/Tablet";
import AddButton from "../../../general/components/AddButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import appSlice from "../../../redux/appSlice";

const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
  margin-bottom: 26px;
  ${Tablet} {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-bottom: 32px;
    gap: 10px;
  }
`;
const Price = styled.h1`
  color: #1d2026;
  font-family: "Kumbh Sans";
  font-size: 28px;
  font-weight: 700;
`;

const PriceCheck = styled.p`
  padding: 4px 8px;
  display: inline-block;
  border-radius: 6px;
  background: #ffeee2;
  color: #ff7e1b;
  margin-left: 16px;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TotalPrice = styled.h3`
  color: #b6bcc8;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  text-decoration-line: strikethrough;
`;

const Pricing = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const schema = {
      name: "Fall Limited Edition Sneakers",
      price: 125,
      count,
      url: "/image-product-1.jpg",
    };
    dispatch(appSlice.actions.pushProduct(schema));
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <Texts>
        <div>
          <Price>$125.00</Price>
          <PriceCheck>50%</PriceCheck>
        </div>
        <TotalPrice>$250.00</TotalPrice>
      </Texts>
      <div className="md:grid grid-cols-[250px_272px] md:justify-between items-center lg:grid-cols-[157px_272px] gap-4">
        <Counter count={count} setCount={setCount} />
        <AddButton
          icon
          onClick={() => {
            handleClick();
          }}
        >
          Add to cart
        </AddButton>
      </div>
    </div>
  );
};

export default Pricing;
