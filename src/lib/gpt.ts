async function generateResponse(text: string, mode: ModeType) {
  if (mode === "Humanize") {
    text = "Paraphrase this text by simplifying it and less robotic: " + text;
  }
  if (mode === "Formalize") {
    text = "Paraphrase this text and make it sound academic: " + text;
  }

  console.log(text);

  const res = await fetch("api/gpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: text,
    }),
  });

  return res.json();
}

export { generateResponse };
