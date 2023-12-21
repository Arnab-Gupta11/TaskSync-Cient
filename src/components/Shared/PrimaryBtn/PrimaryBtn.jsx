// eslint-disable-next-line react/prop-types
const PrimaryBtn = ({ children }) => {
  return (
    <div>
      <button className="px-5 py-2.5 rounded-[3px] font-medium hover:shadow-sm hover:shadow-[#2F75D0] hover:transition-shadow hover:duration-500 bg-[#2F75D0] text-white ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
