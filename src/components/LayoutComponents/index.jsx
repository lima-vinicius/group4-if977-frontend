import "./styles.css";

export const LayoutComponents = (props) => {
  return (
    <div className="container">
      <div className="container-content">
        <div className="container-wrap">{props.children}</div>
      </div>
    </div>
  );
};