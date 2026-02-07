import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateName = (value) => {
    if (!value) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    const regex = /[\s@]+@[\s@]+\.[\s@]+/;
    if (!regex.test(value)) return "Invalid email format";
    return "";
  };

  const validateAge = (value) => {
    if (!value) return "Age is required";
    if (Number(value) < 18) return "Must be at least 18";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    if (nErr || eErr || aErr) return;

    setSuccess(true);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameError(validateName(e.target.value));
        }}
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(validateEmail(e.target.value));
        }}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
          setAgeError(validateAge(e.target.value));
        }}
      />
      {ageError && <p style={{ color: "red" }}>{ageError}</p>}

      <button type="submit">Submit</button>

      {success && (
        <p style={{ color: "green" }}>Registration successful!</p>
      )}
    </form>
  );
}

export default RegistrationForm;
