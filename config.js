require('dotenv').config();

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

if (!CLAUDE_API_KEY) {
  throw new Error('❌ FEHLER: CLAUDE_API_KEY nicht in .env gefunden!');
}

console.log('✅ API-Key erfolgreich geladen!');

module.exports = {
  CLAUDE_API_KEY
};
