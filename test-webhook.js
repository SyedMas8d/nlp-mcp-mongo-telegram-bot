const axios = require("axios");

// Test webhook endpoint directly
const testWebhook = async () => {
  try {
    const testMessage = {
      update_id: 123456789,
      message: {
        message_id: 1,
        date: Math.floor(Date.now() / 1000),
        text: "/start",
        from: {
          id: 12345, // This would be a real user ID
          first_name: "Test",
          username: "testuser",
        },
        chat: {
          id: 12345, // This would be a real chat ID
          type: "private",
        },
      },
    };

    console.log("Testing webhook locally...");
    const response = await axios.post(
      "http://localhost:3001/webhook/telegram",
      testMessage
    );
    console.log("Webhook response:", response.status, response.data);
  } catch (error) {
    console.error(
      "Webhook test failed:",
      error.response?.data || error.message
    );
  }
};

testWebhook();
