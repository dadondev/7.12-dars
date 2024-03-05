import ClickSlider from "./components/ClickSlider";
import Content from "./components/Content";
import Slider from "./components/Slider";

const Main = () => {
  return (
    <main className="h-full container mx-auto lg:pt-[90px] lg:flex lg:items-center lg:gap-[45px] xl:gap-[125px]">
      <ClickSlider />
      <Slider />
      <Content />
    </main>
  );
};

export default Main;
