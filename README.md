# FlowSync-AI - Slack + AI-Powered Collaboration Platform

A modern communication platform combining **real-time messaging** (Slack-like) with **AI-powered features** for smarter teamwork.

---
## Project Overview:

### What is FlowSync-AI?

**FlowSync-AI** - Slack + Built-in AI Intelligence

**Core Features:**
- Real-time messaging, channels, direct messages
- AI summaries of conversations
- Semantic search (find by meaning, not keywords)
- Auto task extraction from messages
- Sentiment analysis dashboard
- Smart reply suggestions
- Meeting transcription & notes

**Why choose FlowSync?**
- All Slack features + unique AI
- Lower cost
- AI built-in, not a plugin
- Privacy-focused, self-hosting available
- Open API for integrations

---

## Tech Stack

```
Frontend: React 19 + Vite + Tailwind CSS
Backend: Springboot (to build)
Database: PostgreSQL (to setup)
```

---


## 📁 Project Structure

```
Flowsync/
|-- src/
|   |-- components/      # UI components (to build)
|   |-- context/         # contexts
|   |-- hooks/           # hooks
|   |-- layouts/         # layouts
|   |-- assets/          # images
|   |-- pages/           # UI Pages
|   |-- routes/          # Routing config
|   |-- services/        # API services
|   |-- utils/           # Helpers
|-- public/              # Static assets
|-- index.html
```

---

## Features Planned

### Messaging
- [ ] User authentication & profiles
- [ ] Workspaces management
- [ ] Public/private channels
- [ ] Direct messaging
- [ ] Message threads & reactions
- [ ] File uploads
- [ ] @mentions & notifications

### AI Features
- [ ] Daily/weekly summaries
- [ ] Semantic search
- [ ] Sentiment analysis
- [ ] Auto task extraction
- [ ] Smart reply suggestions
- [ ] Meeting transcription

### Advanced
- [ ] Video/audio calls
- [ ] Workflow automation
- [ ] Knowledge base generation
- [ ] Third-party integrations

---

## Architecture Overview

FlowSync-AI is designed as a **modern web app** with:
- **Frontend**: React + Vite for UI and routing
- **Backend**: Springboot + real-time layer for messaging
- **Database**: MySQL for users, workspaces, channels, and messages
- **Realtime**: WebSocket or Socket.io for live chat and presence
- **AI Layer**: OpenAI / other model API for summaries, search, sentiment, and task extraction

---

##  Setup Instructions (Quick Start): 

### Prerequisites
```bash
Node.js 16+, npm/yarn, Git
```

### Installation
```bash
cd Flowsync

npm install

npm run dev

npm run build
```

### Environment Variables
```bash
echo "VITE_API_URL=http://localhost:3000/api" > .env
echo "VITE_WS_URL=ws://localhost:3000" >> .env
echo "VITE_OPENAI_API_KEY=your_key" >> .env
```

----

## 🛠️ Development Commands

```bash
npm run dev              # Start development server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run lint -- --fix    # Fix ESLint issues
```

---

## 📦 Key Dependencies

```json
{
  "react": "19.2.6",
  "vite": "8.0.12",
  "react-router-dom": "7.15.1",
  "tailwindcss": "4.3.0",
  "axios": "1.16.1"
}
```
---