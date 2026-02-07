import React, { useState } from "react";
import UserProfile from "./UserProfile";

export default function UserApp() {
  const [userId, setUserId] = useState(1);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0 }}>User App</h2>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
      </div>

      <p style={{ margin: 0, color: "#555" }}>
        Current userId: <b>{userId}</b>
      </p>

      <UserProfile userId={userId} />
    </div>
  );
}
