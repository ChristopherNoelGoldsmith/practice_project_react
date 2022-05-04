import "./Overlay.css";

const Overlay = (props) => {
  console.log(props.visability);
  return (
    <div className={`overlay ${props.visability}`}>
      <p>You Must Enter Both a Name and a Date to Proceed</p>
    </div>
  );
};

export default Overlay;
