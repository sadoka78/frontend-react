const Greeting = () => {
  const currentHour = new Date().getHours();

  let greetingText = "";
  let textColor = "";

  if (currentHour >= 6 && currentHour < 12) {
    greetingText = "Good Morning";
    textColor = "orange";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = "Good Afternoon";
    textColor = "green";
  } else {
    greetingText = "Good Evening";
    textColor = "purple";
  }

  const style = {
    color: textColor,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  };

  return <h1 style={style}>{greetingText}</h1>;
};

export default Greeting;
