import axios from "axios";

// Base API URL, ideally fetched from an environment variable
const API_URL = "http://localhost:8080/api/qna/ask";

/**
 * Fetches the chatbot response from the API.
 * 
 * @param {string} question - The user's question to be sent to the chatbot.
 * @returns {Promise<Object>} - The API response data.
 * @throws {Error} - If the API request fails.
 */
export const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post(API_URL, { question });
    return response.data;
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    throw new Error("Failed to fetch chatbot response. Please try again.");
  }
};
