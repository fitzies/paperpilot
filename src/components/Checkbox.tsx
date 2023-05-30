type props = {
  text: string;
};

const Checkbox = (props: props) => {
  return (
    <div className="form-control ">
      <label className="label cursor-pointer flex justify-start items-center gap-3">
        <input type="checkbox" className="checkbox checkbox-sm" />
        <span className="label-text">{props.text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
