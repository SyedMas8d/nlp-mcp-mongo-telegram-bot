const nlpProcessor = require('./src/services/nlpProcessor');
const mcpToolExecutor = require('./src/services/mcpToolExecutor');

console.log('🧪 Testing Complete Flow: "Generate welcome message with coffee"\n');

// Step 1: Test NLP Processing
const message = "Generate welcome message with coffee";
console.log('Step 1: NLP Processing');
const nlpResult = nlpProcessor.detectIntent(message);
console.log('NLP Result:', JSON.stringify(nlpResult, null, 2));

// Step 2: Test MCP Tool Execution
console.log('\nStep 2: MCP Tool Execution');
const storeId = "test-store";

mcpToolExecutor.updateWelcomeMessage(storeId, nlpResult.parameters)
  .then(result => {
    console.log('MCP Result:', JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('MCP Error:', error.message);
    console.error('Stack:', error.stack);
  });
