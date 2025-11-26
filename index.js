const axios = require("axios");

async function main() {
  console.log("🚀 Running Node App...");
  
  const res = await axios.get("https://api.github.com/");
  
  console.log("📦 GitHub API Status:", res.status);
}

main();
