const mcpToolExecutor = require('./src/services/mcpToolExecutor');

console.log('🎨 Testing Welcome Message Generation\n');

const themes = [
  'pizza',
  'coffee', 
  'burger restaurant',
  'sushi',
  'indian food',
  'mexican tacos',
  'healthy organic',
  'fast food'
];

themes.forEach(theme => {
  const message = mcpToolExecutor.generateCatchyWelcomeMessage(theme);
  console.log(`🎯 Theme: "${theme}"`);
  console.log(`📝 Generated: "${message}"`);
  console.log('---');
});

console.log('\n✅ Message generation testing complete!');
