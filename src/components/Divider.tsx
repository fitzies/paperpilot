type DividerProps = {
  size?: "2/3" | "full";
};

const Divider = ({ size = "2/3" }) => {
  return <div className={`w-${size} bg-gray-200 h-[2px] my-3`}></div>;
};

export default Divider;
