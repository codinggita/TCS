import { Link } from "react-router-dom";
import Banner from "../comopnents/Banner/Banner";
import Service from "../comopnents/Service/Service";
import BrandLogo from "../comopnents/Speciality/Speciality";
import TrackSearch from "../comopnents/TrackSearch/TrackSearch";

const Home = () => {
  return (
    <Link to="/auth">
      <Banner />
      <BrandLogo />
      <Service />
      <TrackSearch />
    </Link>
  );
};

export default Home;
