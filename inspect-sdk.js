
import * as genai from "@google/genai";

const apiKey = "AIzaSyBtJL5MRGADpJWCzlSL3AUYRKuk2tYxG2w";

async function test() {
    console.log("All exports:", Object.keys(genai));

    if (genai.GoogleGenAI) {
        const ai = new genai.GoogleGenAI({ apiKey });
        console.log("AI Instance keys:", Object.keys(ai));

        // Check for nested properties like models
        for (const key of Object.keys(ai)) {
            console.log(`ai.${key} type:`, typeof ai[key]);
            if (typeof ai[key] === 'object' && ai[key] !== null) {
                console.log(`ai.${key} keys:`, Object.keys(ai[key]));
            }
        }
    }
}

test();
