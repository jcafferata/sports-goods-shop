import "./Button.css";

const Button = ({ type, title, children }) => (
  <button className="button" type={type} title={title}>
    {children}
  </button>
);

export default Button;
