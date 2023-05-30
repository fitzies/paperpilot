const Dropdown = () => {
  return (
    <select className="select lg:w-1/2 max-w-xs" name="option">
      <option>Humanize</option>
      <option>Formalize</option>
      <option>Expand</option>
      <option>Shorten</option>
    </select>
  );
};

export default Dropdown;
