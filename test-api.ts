
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBtJL5MRGADpJWCzlSL3AUYRKuk2tYxG2w";

async function test() {
    console.log("Testing with hardcoded API Key...");

    const ai = new GoogleGenAI(apiKey);

    try {
        console.log("Sending request to Gemini (model: gemini-1.5-flash)...");
        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: "Hello, say 'API IS WORKING' if you hear me."
        });

        console.log("Response text:", response.text);
        console.log("Full response object:", JSON.stringify(response, null, 2));
    } catch (error) {
        console.error("API Call Failed:");
        if (error instanceof Error) {
            console.error("Message:", error.message);
            console.error("Stack:", error.stack);
        } else {
            console.error(error);
        }
    }
}

test();
