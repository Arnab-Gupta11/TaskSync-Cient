// eslint-disable-next-line react/prop-types
const SecondaryBtn = ({ children }) => {
  return (
    <div>
      <button className="px-8 py-2 rounded-md font-medium hover:shadow-sm hover:bg-[#2765b7] hover:duration-150  bg-[#2F75D0] text-white">
        {children}
      </button>
    </div>
  );
};

export default SecondaryBtn;
