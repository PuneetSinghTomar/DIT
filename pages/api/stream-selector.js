// pages/api/stream-selector.js
import { OpenAIApi } from "openai";

// Instantiate OpenAIApi with API key directly
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,  // Store your API key in an environment variable for security
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      // Call the OpenAI API to generate a response
      const response = await openai.createCompletion({
        model: "text-davinci-003", // Use the desired model
        prompt: `Help the student choose a stream based on their message: "${message}"`,
        max_tokens: 150, // Limit the length of the response
      });

      const aiReply = response.data.choices[0].text.trim();

      res.status(200).json({
        reply: aiReply,
      });
    } catch (error) {
      console.error("OpenAI API error: ", error);  // Log the error to see more details
      res.status(500).json({ error: "Error generating response from OpenAI", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
