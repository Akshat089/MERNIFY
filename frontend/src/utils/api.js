// src/utils/api.js
const BACKEND_URL = (() => {
  try {
    return process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  } catch {
    // fallback if process is undefined (e.g., running outside CRA bundle)
    return "http://localhost:5000";
  }
})();

export const signupUser = async (username, email, password) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("Signup API error:", err);
    return { message: "API Error" };
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("Login API error:", err);
    return { message: "API Error" };
  }
};
