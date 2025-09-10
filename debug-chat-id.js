// Utility to extract and show real chat IDs from webhook messages
// Add this temporarily to your botController.js to see real chat IDs

const logIncomingMessage = (req) => {
  if (req.body && req.body.message) {
    const message = req.body.message;
    console.log("=== INCOMING MESSAGE DEBUG ===");
    console.log("Chat ID:", message.chat.id);
    console.log("User ID:", message.from.id);
    console.log("Username:", message.from.username);
    console.log("First Name:", message.from.first_name);
    console.log("Message Text:", message.text);
    console.log("==============================");

    // Return the chat ID for use in responses
    return message.chat.id;
  }
  return null;
};

module.exports = { logIncomingMessage };
