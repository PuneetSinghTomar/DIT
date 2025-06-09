// components/ChatBot.jsx
"use client";

import {useEffect, useState } from "react";
import { Send } from "lucide-react";

const typingTexts = [
  "Ask me about your stream...",
  "Need help with admission?",
  "What's your interest area?",
  "Confused about courses?",
];

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [started, setStarted] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const handleSend = async () => {
    if (!input.trim()) return;
    setStarted(true);
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response (replace with OpenAI API call)
    const botResponse = await fetch("/api/stream-selector", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await botResponse.json();
    setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
  };

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setPlaceholder("");
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <div className="w-full md:w-[80%] transition-all duration-500">
      <div className="border border-white rounded-lg p-2 bg-white/10 backdrop-blur-md">
        <div className="text-sm text-white mb-2">
          {!started ? "Ask anything about admission & Courses" : "Chat with us"}
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-2 rounded-lg border border-white bg-transparent placeholder-white text-white focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} className="text-white">
            <Send size={20} />
          </button>
        </div>

        {started && (
          <div className="mt-4 max-h-72 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-white px-3 py-2 rounded-lg w-fit max-w-[80%] ${
                  msg.sender === "user" ? "ml-auto bg-blue-500" : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
