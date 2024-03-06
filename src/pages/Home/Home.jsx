import React, { useEffect } from "react";
import Header from "../../general/components/Header";
import Main from "../Main/Main";
import { useDispatch } from "react-redux";
import appSlice from "../../redux/appSlice";

const Home = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(appSlice.actions.setModal(false));
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      dispatch(appSlice.actions.setModal(false));
    });
  }, []);
  return (
    <div
      className="h-full container mx-auto lg:max-w-[890px] xl:max-w-[1110px] sm:max-w-full lg:pb-[60px]"
      onClick={() => handleClick()}
    >
      <Header />
      <Main />
    </div>
  );
};

export default Home;
