import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Dialog from "./Dialog";

const urls = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

const StyledSlider = styled.div`
  display: none;
  max-width: 445px;
  & > img {
    border-radius: 15px;
    margin-bottom: 32px;
    height: 445px;
  }
  @media (width>=1024px) {
    display: block;
  }
`;

const Images = styled.div`
  display: flex;
  gap: 31px;

  & > img {
    max-width: 88px;
    border-radius: 10px;
    transition: all 300ms;
  }
  & > img:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.5) 100%
      ),
      url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;

const ClickSlider = () => {
  const [url, setUrl] = useState(urls[0]);

  const handleClick = (url) => {
    setUrl(url);
  };
  const handleModal = (url) => {
    document.getElementById("hello").showModal();
  };
  return (
    <StyledSlider>
      <img
        src={url}
        className="cursor-pointer"
        alt="product"
        onClick={() => handleModal(url)}
      />
      <Images>
        {urls.map((e, i) => (
          <img
            src={e}
            key={i}
            onClick={() => handleClick(e)}
            className={
              e == url
                ? `cursor-pointer opacity-50`
                : "opacity-1 hover:opacity-80 cursor-pointer"
            }
          />
        ))}
      </Images>
      {createPortal(<Dialog />, document.body)}
    </StyledSlider>
  );
};

export default ClickSlider;
