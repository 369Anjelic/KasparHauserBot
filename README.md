# 🤖 Kaspar Hauser Bot - Claude AI Integration

Ein sicherer Claude AI Bot mit Node.js, der deinen API-Key geschützt speichert!

## 🎯 Features

✅ Claude AI Integration mit `@anthropic-ai/sdk`
✅ Sicherer API-Key Management mit `dotenv`
✅ Deutsche Sprache unterstützt
✅ `.env` Datei geschützt durch `.gitignore`
✅ Einfache und erweiterbare Architektur

---

## 📦 Installation

### 1. Dependencies installieren

```bash
npm install
```

Das installiert:
- `@anthropic-ai/sdk` - Claude API Client
- `dotenv` - Sichere Umgebungsvariablen

### 2. API-Key konfigurieren

Erstelle eine `.env` Datei im Projektverzeichnis:

```bash
echo CLAUDE_API_KEY=sk-ant-xxxxx > .env
```

Oder öffne `.env` und ersetze `sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxx` mit deinem echten Claude API-Key!

**⚠️ WICHTIG:** Die `.env` Datei wird durch `.gitignore` geschützt und nie auf GitHub hochgeladen!

---

## 🚀 Bot starten

```bash
npm start
```

oder

```bash
node bot.js
```

Du solltest eine Antwort von Claude sehen! ✅

---

## 📋 Dateistruktur

```
KasparHauserBot/
├── bot.js              # Hauptbot-Datei
├── config.js           # API-Key Konfiguration
├── package.json        # Dependencies
├── .env                # 🔐 API-Key (lokal nur!)
├── .gitignore          # Schutz für .env
└── README.md           # Diese Datei
```

---

## 🔐 Sicherheit

- ✅ API-Key ist in `.env` (nicht in Code!)
- ✅ `.env` ist in `.gitignore` (nicht auf GitHub!)
- ✅ Nur `package.json` wird hochgeladen (mit Dependencies)
- ✅ Jeder Entwickler muss seine eigene `.env` mit API-Key erstellen

---

## 💡 Beispiel: API-Key konfigurieren

**Auf Windows:**
```bash
echo CLAUDE_API_KEY=sk-ant-dein-key-hier > .env
```

**Auf Mac/Linux:**
```bash
echo "CLAUDE_API_KEY=sk-ant-dein-key-hier" > .env
```

---

## 🔧 Bot erweitern

Die `bot.js` Datei ist einfach erweiterbar. Beispiel für mehrere Nachrichten:

```javascript
async function main() {
  const messages = [
    'Hallo Claude!',
    'Wie kann ich dich nutzen?',
    'Was ist dein Lieblingsprogrammiersprache?'
  ];

  for (const msg of messages) {
    const response = await chat(msg);
    console.log(`Q: ${msg}\nA: ${response}\n`);
  }
}
```

---

## 📖 Dokumentation

- [Anthropic Claude API Docs](https://docs.anthropic.com/)
- [Node.js Dokumentation](https://nodejs.org/en/docs/)

---

## ✅ Sicherheitschecklist

- [ ] `.env` Datei mit API-Key erstellt
- [ ] `.env` in `.gitignore` aufgelistet
- [ ] `npm install` erfolgreich durchgeführt
- [ ] `npm start` antwortet mit Claude-Antwort
- [ ] Keine Datei mit API-Key auf GitHub hochgeladen

---

**Erstellt mit ❤️ für sichere AI Integration**
