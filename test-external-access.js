const axios = require("axios");

async function testExternalAccess() {
  try {
    console.log("🧪 Testing external access via new ngrok URL...");
    console.log("🌐 URL: https://ab0a9a7675b9.ngrok-free.app");

    const response = await axios.get(
      "https://ab0a9a7675b9.ngrok-free.app/health",
      {
        timeout: 10000,
      }
    );

    console.log("✅ Health check successful!");
    console.log("📊 Response:", JSON.stringify(response.data, null, 2));

    return true;
  } catch (error) {
    console.error("❌ External access test failed:");
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Data: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error(`   Error: ${error.message}`);
    }
    return false;
  }
}

testExternalAccess();
