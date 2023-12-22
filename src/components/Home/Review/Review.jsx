import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const Review = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosPublic.get("/feedbacks").then((res) => setReviews(res.data));
  }, [axiosPublic]);
  console.log(reviews);
  return (
    <div className="pt-16 bg-[#F0F9FC]">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className=" px-5 ">
          <div className="ml-5">
            <h4 className="text-[#398fff] text-4xl font-semibold mb-3">Target Audience</h4>
            <h2 className="text-lg font-medium text-[#1A2D62] mb-4">Discover how different types of users can benefit from our website</h2>
          </div>
          <div className="z-0">
            <Marquee pauseOnHover="ture">
              {reviews?.map((review) => (
                <ReviewCard key={review._id} reviewCard={review}></ReviewCard>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
