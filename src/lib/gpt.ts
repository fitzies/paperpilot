async function generateResponse(text: string) {
  const res = await fetch(
    process.env.GPT_URL || "http://localhost:3000/api/gpt",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: text }),
    }
  );

  return res.json();
}

export { generateResponse };
