import Banner from "../../components/Home/Banner/Banner";
import Footer from "../../components/Home/Footer/Footer";
import Review from "../../components/Home/Review/Review";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
