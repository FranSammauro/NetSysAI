export const registerUser = async (email, password) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || "Error registering user");
    }

    return data;

  } catch (error) {
    return { error: error.message };
  }
};