import React, { useEffect, useRef, useState } from "react";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const abortRef = useRef(null);

  const fetchUser = async (id) => {
    
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { signal: controller.signal }
      );

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data = await res.json();
      setUser(data);
    } catch (e) {
      
      if (e?.name !== "AbortError") {
        setError(e?.message || "Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    fetchUser(userId);

    return () => {
      
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
    
  }, [userId]);

  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1; // 1..10
    fetchUser(randomId);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 10 }}>
      <h3 style={{ marginTop: 0 }}>UserProfile</h3>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={handleRefresh}>Refresh (random user 1–10)</button>
      </div>

      <hr />

      {loading && <p>Loading...</p>}

      {!loading && error && (
        <p style={{ color: "crimson" }}>
          <b>Error:</b> {error}
        </p>
      )}

      {!loading && !error && user && (
        <div>
          <p>
            <b>ID:</b> {user.id}
          </p>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
        </div>
      )}

      {!loading && !error && !user && <p>No data yet.</p>}
    </div>
  );
}
