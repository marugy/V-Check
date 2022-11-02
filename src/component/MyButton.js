const MyButton = ({ type, text }) => {
  const btnType = ["enroll", "detail"].includes(type) ? type : "default";

  const handleOnClick = () => {
    if (btnType === "enroll") {
    } else if (btnType === "detail") {
    }
  };

  return <button onClick={handleOnClick}>{text}</button>;
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
