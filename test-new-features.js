const axios = require("axios");

// Test the new features
const testNewFeatures = async () => {
  const baseUrl = "http://localhost:3001/webhook/telegram";
  const testChatId = 12345;

  const testMessages = [
    {
      name: "Welcome Message Test",
      text: 'set welcome message "Welcome to our amazing restaurant!"',
    },
    {
      name: "Gift Card Enable Test",
      text: "enable gift cards",
    },
    {
      name: "Gift Card Config Test",
      text: "set gift card minimum 10 maximum 100",
    },
    {
      name: "Loyalty Points Enable Test",
      text: "enable loyalty points",
    },
    {
      name: "Status Check (should show new fields)",
      text: "status",
    },
    {
      name: "Help Check (should show new commands)",
      text: "help",
    },
  ];

  for (const test of testMessages) {
    try {
      console.log(`\n🧪 Testing: ${test.name}`);
      console.log(`📤 Sending: "${test.text}"`);

      const webhookPayload = {
        update_id: Math.floor(Math.random() * 1000000),
        message: {
          message_id: Math.floor(Math.random() * 1000),
          date: Math.floor(Date.now() / 1000),
          text: test.text,
          from: {
            id: testChatId,
            first_name: "TestUser",
            username: "testuser",
          },
          chat: {
            id: testChatId,
            type: "private",
          },
        },
      };

      const response = await axios.post(baseUrl, webhookPayload);
      console.log(
        `✅ Response: ${response.status} ${response.data?.ok ? "OK" : "Error"}`
      );

      // Wait a bit between requests
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.log(
        `❌ Error: ${error.response?.data?.message || error.message}`
      );
    }
  }
};

console.log("🚀 Testing New FVK-BOT Features...");
testNewFeatures()
  .then(() => {
    console.log("\n✨ Testing completed!");
  })
  .catch(console.error);
