import { useState } from "react";

import './App.css';
import ChatInput from './components/ChatInput'; // Correct folder name
import ChatResponse from './components/ChatResponse'; // Correct folder name
import { fetchChatResponse } from './services/api';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    console.log("Handling submit with question:", question); // Debugging line
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      alert("Failed to get response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="APP">
      <header className="bg-primary text-white text-center py-4">
        <h1>Gemini Chatbot</h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit} />
      {loading ? (
        <div className="text-center my-4">Loading...</div>
      ) : (
        <ChatResponse response={response} />
      )}
    </div>
  );
}

export default App;
