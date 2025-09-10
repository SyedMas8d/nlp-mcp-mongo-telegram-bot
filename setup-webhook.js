const axios = require("axios");

const TELEGRAM_BOT_TOKEN = "8370382747:AAHcxBm0AtQqC5-V6fmq_71N8zzzFgQ5r9M";
const NEW_WEBHOOK_URL = "https://ab0a9a7675b9.ngrok-free.app/webhook/telegram";

async function setupWebhook() {
  try {
    console.log("🔄 Setting up new webhook URL...");

    // Set webhook with Telegram API directly
    const webhookResponse = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`,
      {
        url: NEW_WEBHOOK_URL,
        drop_pending_updates: true,
      }
    );

    if (webhookResponse.data.ok) {
      console.log("✅ Webhook set successfully!");
      console.log(`📍 New URL: ${NEW_WEBHOOK_URL}`);

      // Verify webhook is set
      const webhookInfo = await axios.get(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`
      );

      console.log("🔍 Webhook Info:");
      console.log(`   URL: ${webhookInfo.data.result.url}`);
      console.log(
        `   Has Custom Certificate: ${webhookInfo.data.result.has_custom_certificate}`
      );
      console.log(
        `   Pending Updates: ${webhookInfo.data.result.pending_update_count}`
      );
    } else {
      console.error("❌ Failed to set webhook:", webhookResponse.data);
    }
  } catch (error) {
    console.error(
      "❌ Error setting webhook:",
      error.response?.data || error.message
    );
  }
}

setupWebhook();
