import "./Button.module.scss";

function Button(props) {
  const { buttonType, clickEvent } = props;
  return <button onClick={() => clickEvent}>{buttonType}</button>;
}
export default Button;
