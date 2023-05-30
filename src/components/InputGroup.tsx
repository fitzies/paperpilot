type props = {
  title: string;
  label: string;
  type: string;
  placeholder?: string;
  onchange: Function;
};

const InputGroup = (props: props) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.title}</span>
      </label>
      <label className="input-group">
        <span className="w-1/4 flex justify-center">{props.label}</span>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="input input-bordered"
          onChange={(e: any) => {
            props.onchange(e);
          }}
        />
      </label>
    </div>
  );
};

export default InputGroup;
