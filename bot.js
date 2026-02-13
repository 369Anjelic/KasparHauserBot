require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

async function chat(userMessage) {
  try {
    console.log('📤 Sende Nachricht an Claude...\n');

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
    process.exit(1);
  }
}

// Test: Bot mit einer Frage starten
async function main() {
  const question = 'Hallo Claude! Wer bist du und was kannst du machen? Antworte auf Deutsch!';

  console.log('🤖 Kaspar Hauser Bot - Claude AI Integration\n');
  console.log(`👤 Frage: ${question}\n`);
  console.log('═'.repeat(60) + '\n');

  const response = await chat(question);

  console.log('🤖 Claude antwortet:\n');
  console.log(response);
  console.log('\n' + '═'.repeat(60));
}

main();
