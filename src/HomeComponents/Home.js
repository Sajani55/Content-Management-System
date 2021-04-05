import Carousel from "./Carousel";
import Hero from "./Hero";
import UinivBanner from "./UnivBanner";
import RecentEvent from "../EventComponents/RecentEvent";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Hero />
      <UinivBanner />
      <RecentEvent />
    </div>
  );
};

export default Home;
