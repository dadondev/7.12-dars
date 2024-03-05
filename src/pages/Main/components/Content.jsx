import React from "react";
import styled from "styled-components";
import Pricing from "./Pricing";
import Tablet from "../../../general/utils/Tablet";
import { useSelector } from "react-redux";

const Title = styled.h4`
  color: #ff7e1b;
  font-family: "Kumbh Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.846px;
  margin-bottom: 19px;
  text-transform: uppercase;
  @media (width>=1024px) {
    margin-bottom: 27px;
  }
`;

const Subtitle = styled.h1`
  color: #1d2026;
  font-family: "Kumbh Sans";
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: 700;
  line-height: 32px; /* 114.286% */
  ${Tablet} {
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 32px;
  }
`;

const Paragraph = styled.p`
  color: #69707d;
  font-family: "Kumbh Sans";
  font-size: 15px;
  line-height: 25px; /* 166.667% */
  margin-bottom: 24px;

  ${Tablet} {
    font-size: 16px;
    line-height: 26px;
  }
`;
const Content = () => {
  const product = useSelector((e) => e.products[0]);

  return (
    <div className="h-full p-6 lg:p-0 lg:max-w-full">
      <Title>Sneaker Company</Title>
      <Subtitle>Fall Limited Edition Sneakers</Subtitle>
      <Paragraph>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Paragraph>
      <Pricing />
    </div>
  );
};

export default Content;
