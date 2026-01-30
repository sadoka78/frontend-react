const ProfileCard = () => {
  const name = "Alyaska Young";
  const bio = "React learner. Loves clean code and cozy cafes ☕";
  const imageUrl =
    "https://via.placeholder.com/150";

  const cardStyle = {
    width: "300px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    marginBottom: "15px",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Profile" style={imageStyle} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button style={buttonStyle}>Follow</button>
    </div>
  );
};

export default ProfileCard;
