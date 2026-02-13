require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

async function chat(userMessage) {
  try {
    const response = await client.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: userMessage }
      ]
    });
    return response.content[0].text;
  } catch (error) {
    console.error('❌ Fehler:', error.message);
  }
}

// Test
chat('Hallo Claude! Wer bist du?').then(response => {
  console.log('🤖 Claude antwortet:');
  console.log(response);
});
