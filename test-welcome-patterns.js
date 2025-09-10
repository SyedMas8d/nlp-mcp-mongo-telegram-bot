const nlpProcessor = require('./src/services/nlpProcessor');

// Test the new catchy welcome message patterns
console.log('🧪 Testing Catchy Welcome Message Patterns\n');

const testMessages = [
  "Set catchy welcome message with pizza",
  "Generate welcome message with coffee",
  "Create catchy welcome for burger restaurant", 
  "Make welcome message about sushi",
  "catchy welcome message indian food",
  "Set welcome message \"Hello World\"", // Traditional method
];

testMessages.forEach((message, index) => {
  console.log(`Test ${index + 1}: "${message}"`);
  const result = nlpProcessor.detectIntent(message);
  console.log(`➤ Intent: ${result.intent}`);
  console.log(`➤ Confidence: ${result.confidence}`);
  console.log(`➤ Parameters:`, result.parameters);
  console.log('---');
});

console.log('\n✅ Pattern testing complete!');
