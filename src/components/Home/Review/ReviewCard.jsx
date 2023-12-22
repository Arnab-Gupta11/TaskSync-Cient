import PropTypes from "prop-types";
// import Rating from "../../Shared/Rating/Rating";
const ReviewCard = ({ reviewCard }) => {
  const { title, description } = reviewCard;
  return (
    <div>
      <div>
        <div className="relative flex w-96 mt-5 ml-5 flex-col bg-white text-gray-700 rounded-md shadow-xl shadow-blue-300">
          <div className="mb-6 px-5 h-32 ">
            <p className="block text-xl text-justify font-semibold text-[#0A3D53] leading-relaxed text-inherit antialiased">{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  reviewCard: PropTypes.object,
};
export default ReviewCard;
