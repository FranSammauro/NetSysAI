const API_URL = "http://127.0.0.1:8000";

//  analyze protegido con token
export const analyzeURL = async (url) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error("Unauthorized or server error");
    }

    return await response.json();
  } catch (error) {
    console.error("Analyze error:", error);
    return { status: "error", reason: "Failed to analyze URL" };
  }
};

//  register
export const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    console.error("Register error:", error);
    return { error: "Failed to register user" };
  }
};

// 🔐 login
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // guardar token
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Failed to login" };
  }
};