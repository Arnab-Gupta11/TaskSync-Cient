import Lottie from "lottie-react";
import banner from "../../../assets/banner.json";
import Section from "../../Shared/Section/Section";
import PrimaryBtn from "../../Shared/PrimaryBtn/PrimaryBtn";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="min-h-screen bg-[#0A3D53]">
      <Section>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse mx-5 lg:mx-0 items-center">
            <div>
              <Lottie animationData={banner} loop={true} />
            </div>
            <div className="mt-2">
              <h1 className="text-5xl font-bold text-white">
                Elevate Your Productivity with <span className="text-[#398fff]">TaskSync</span>
              </h1>
              <p className="py-6 text-[#d3dce6]">Boost your productivity, stay on top of deadlines, and achieve your goals efficiently.</p>
              <Link to={"/login"}>
                <PrimaryBtn>Let&apos;s Explore</PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Banner;
