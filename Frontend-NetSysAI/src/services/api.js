export const analyzeURL = async (url) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error:", error);
    return { status: "error", reason: "Failed to connect to server" };
  }
};