// Debug test for updateWelcomeMessage function
require('dotenv').config();

const mcpToolExecutor = require('./src/services/mcpToolExecutor');

console.log('🐛 Debug: Testing updateWelcomeMessage with exact parameters from NLP\n');

const testParameters = {
  generateCatchy: true,
  theme: 'coffee'
};

console.log('Input Parameters:', JSON.stringify(testParameters, null, 2));

// Test the generation function directly first
console.log('\n🎨 Testing message generation directly:');
try {
  const generatedMessage = mcpToolExecutor.generateCatchyWelcomeMessage('coffee');
  console.log('Generated Message:', `"${generatedMessage}"`);
} catch (error) {
  console.error('Generation Error:', error.message);
}

// Test the full function (will fail on DB connection, but we can see the logic)
console.log('\n🔧 Testing full updateWelcomeMessage function:');
mcpToolExecutor.updateWelcomeMessage('test-store', testParameters)
  .then(result => {
    console.log('Function Result:', JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('Function Error:', error.message);
    // Even if DB fails, we should see if the generation worked
  });
