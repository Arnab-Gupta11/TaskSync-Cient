// eslint-disable-next-line react/prop-types
const DashboardTitle = ({ children }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-[#0A3D53] border-l-8 border-[#2F75D0] pl-2">{children}</h2>
    </div>
  );
};

export default DashboardTitle;
