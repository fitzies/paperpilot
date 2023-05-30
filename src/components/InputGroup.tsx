type props = {
  title: string;
  type: string;
  placeholder?: string;
  onchange: Function;
};

const InputGroup = (props: props) => {
  return (
    <div className="form-control w-full gap-1">
      <label className="label">
        <span className="label-text">{props.title}</span>
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input input-bordered w-full"
        onChange={(e: any) => props.onchange(e)}
      />
      <label className="label"></label>
    </div>
  );
};

export default InputGroup;
