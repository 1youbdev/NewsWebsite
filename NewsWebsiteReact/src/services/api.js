export const sendResetEmail = async (email) => {
  const response = await fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email.");
  }

  return response.json();
};
