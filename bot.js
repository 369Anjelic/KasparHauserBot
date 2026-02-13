require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');
const readline = require('readline');

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
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
    return null;
  }
}

async function main() {
  console.log('🤖 Kaspar Hauser Bot - Claude AI Integration\n');
  console.log('Tippe deine Fragen ein (tippe "exit" zum Beenden)\n');
  console.log('═'.repeat(60) + '\n');

  const askQuestion = () => {
    rl.question('👤 Du: ', async (userInput) => {
      if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
        console.log('\n👋 Auf Wiedersehen!');
        rl.close();
        return;
      }

      if (userInput.trim() === '') {
        askQuestion();
        return;
      }

      console.log('⏳ Claudedenkt...\n');
      const response = await chat(userInput);

      if (response) {
        console.log('🤖 Claude:\n' + response + '\n');
        console.log('─'.repeat(60) + '\n');
      }

      askQuestion();
    });
  };

  askQuestion();
}

main();
