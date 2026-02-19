
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBtJL5MRGADpJWCzlSL3AUYRKuk2tYxG2w";

async function testModel(apiVersion, model) {
    console.log(`--- Testing Model: ${model} with API Version: ${apiVersion} ---`);
    try {
        const ai = new GoogleGenAI({ apiKey, apiVersion });
        const response = await ai.models.generateContent({
            model: model,
            contents: "Hi"
        });
        console.log(`SUCCESS: ${model} (${apiVersion}) returned: "${response.text}"`);
        return true;
    } catch (e) {
        console.error(`FAILED: ${model} (${apiVersion}) - Error: ${e.message}`);
        if (e.status === 429) {
            console.error("  -> Reason: Quota Exceeded");
        } else if (e.status === 404) {
            console.error("  -> Reason: Model Not Found");
        }
        return false;
    }
}

async function runAllTests() {
    const models = ["gemini-1.5-flash", "gemini-1.5-flash-8b", "gemini-1.5-pro", "gemini-2.0-flash", "gemini-1.0-pro"];
    const versions = ["v1", "v1beta"];

    for (const model of models) {
        for (const version of versions) {
            const success = await testModel(version, model);
            if (success) {
                console.log(`\nRECOMMENDED CONFIG: model: "${model}", apiVersion: "${version}"`);
                // Stop early if we find a working one
                // return; 
            }
        }
    }
}

runAllTests();
