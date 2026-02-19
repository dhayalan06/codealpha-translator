
import fetch from "node-fetch";

const apiKey = "AIzaSyBtJL5MRGADpJWCzlSL3AUYRKuk2tYxG2w";

async function listModels() {
    console.log(`\n--- Listing Models via direct FETCH ---`);
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Status: ${response.status}`);
        console.log("Response Body:", JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Fetch Error:", e);
    }
}

listModels();
