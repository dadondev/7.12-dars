import styled from "styled-components";
import Button from "../../../general/components/Button";

const CounterBar = styled.div`
  width: 100%;
  max-height: 56px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 24px 18px;
  background: #f6f8fd;
`;
const Count = styled.span`
  color: #1d2026;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-weight: 700;
`;

const Counter = ({ count, setCount }) => {
  const handleClick = (type) => {
    if (type == "minus" && count != 0) {
      setCount(count - 1);
    } else if (type == "plus") {
      setCount(count + 1);
    }
  };

  return (
    <CounterBar>
      <Button
        onClick={() => {
          handleClick("minus");
        }}
        icon={"/icon-minus.svg"}
      />
      <Count>{count}</Count>
      <Button
        onClick={() => {
          handleClick("plus");
        }}
        icon={"/icon-plus.svg"}
      />
    </CounterBar>
  );
};

export default Counter;
