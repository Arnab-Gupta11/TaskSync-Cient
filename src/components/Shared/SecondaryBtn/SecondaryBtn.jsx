// eslint-disable-next-line react/prop-types
const SecondaryBtn = ({ children }) => {
  return (
    <div>
      <button className="px-5 py-2.5 rounded-[3px] font-medium hover:shadow-sm hover:shadow-[#2F75D0] hover:bg-none hover:border-[#2F75D0] hover:border-2 hover:duration-700 hover:text-[#2F75D0] bg-[#2F75D0] text-white ">
        {children}
      </button>
    </div>
  );
};

export default SecondaryBtn;
