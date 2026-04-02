import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
You are a Data Structures and Algorithms instructor.
Only answer DSA-related questions.
If the question is not related to DSA, reply rudely.
`
});

const chat = model.startChat({ history: [] });

export async function POST(req) {
  const { message } = await req.json();

  try {
    const result = await chat.sendMessage(message);
    const text = await result.response.text();

    return new Response(JSON.stringify({ reply: text }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
