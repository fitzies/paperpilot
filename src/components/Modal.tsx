type props = {
  htmlFor: string;
  title: string;
  text: string;
};

const Modal = (props: props) => {
  return (
    <>
      <input type="checkbox" id={props.htmlFor} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={props.htmlFor}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{props.title}</h3>
          <p className="py-4">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
