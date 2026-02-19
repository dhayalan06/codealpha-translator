
import fetch from "node-fetch";

const apiKey = "AIzaSyBtJL5MRGADpJWCzlSL3AUYRKuk2tYxG2w";

async function diagnostic(model) {
    console.log(`\n--- Testing ${model} via direct FETCH ---`);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "hi" }] }]
            })
        });

        const data = await response.json();
        console.log(`Status: ${response.status}`);
        if (response.ok) {
            console.log("SUCCESS!");
            console.log("Response Text Snippet:", data.candidates?.[0]?.content?.parts?.[0]?.text || "No text returned");
        } else {
            console.log("FAILURE");
            console.log("Response Body (Short):", JSON.stringify(data.error || data, null, 2).substring(0, 500));
        }
    } catch (e) {
        console.error("Fetch Error:", e);
    }
}

async function run() {
    await diagnostic("gemini-3-flash-preview");
    await diagnostic("gemini-flash-latest");
    await diagnostic("gemini-2.0-flash-lite");
    await diagnostic("gemma-3-4b-it");
}

run();
