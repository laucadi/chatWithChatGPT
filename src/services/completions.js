export const fetchCompletions = async (message) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      message: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("http://localhost:8000/completions", options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return data.choices[0].message;
};
