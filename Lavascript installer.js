// LavaScript Installer for Node.js & Browser
(function() {
    if (typeof window !== "undefined") {
        console.log("🔥 Installing LavaScript in Browser...");

        const script = document.createElement("script");
        script.src = "lavaScript.js";
        document.head.appendChild(script);

        script.onload = () => console.log("✅ LavaScript Installed!");
        script.onerror = () => console.error("❌ Failed to load LavaScript!");
    } else {
        console.log("🔥 Installing LavaScript for Node.js...");
        const fs = require("fs");
        const https = require("https");

        const url = "https://raw.githubusercontent.com/Readyornot69/LavaScript/main/lavaScript.js";
        const file = fs.createWriteStream("lavaScript.js");

        https.get(url, (response) => {
            response.pipe(file);
            file.on("finish", () => {
                file.close();
                console.log("✅ LavaScript Installed!");
            });
        }).on("error", (err) => {
            console.error("❌ Installation Failed:", err.message);
        });
    }
})();
