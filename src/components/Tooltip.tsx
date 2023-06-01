type props = {
  text: string;
  children: React.ReactNode;
  location?: "bottom" | "left" | "right" | "top";
  style?: string;
};

const Tooltip = (props: props) => {
  if (props.location) {
    return (
      <div
        className={`tooltip tooltip-${props.location} ${props.style}`}
        data-tip={props.text}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div
      className={`tooltip tooltip-bottom ${props.style}`}
      data-tip={props.text}
    >
      {props.children}
    </div>
  );
};

export default Tooltip;
