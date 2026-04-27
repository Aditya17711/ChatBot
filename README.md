# ChatBot Repository

A simple rule-based chatbot project built using **HTML**, **CSS**, and **JavaScript**.

## Overview

This repository contains a beginner-friendly chatbot interface that runs directly in the browser.  
The bot responds using a fixed phrase-to-response map.

## Features

- Lightweight and dependency-free
- Pure frontend (no backend required)
- Easy-to-understand code structure
- Rule-based response mapping

## Repository Structure

```text
ChatBot/
├── index.html   # Main page
├── styles.css   # Styling for chatbot UI
├── script.js    # Chatbot behavior and responses
└── README.md    # Repository documentation
```

## How It Works

1. User enters a message in the input field.
2. `send()` adds the user message to the chat.
3. `response()` checks predefined replies.
4. Bot message is rendered in the chat area.

## Sample Response Mapping

```javascript
const responses = {
  "hi": "Hi",
  "hello": "Hi, how can I help you today!",
  "how are you": "I am fine, thanks for asking!",
  "what's your name": "My name is Lucifer.",
  "what's your age": "I am a coded chatbot, so I don't have an age.",
  "bye": "Goodbye! Have a great day!"
};
```

## Run Locally

### Option 1
Open `index.html` directly in your browser.

### Option 2
Serve with a simple HTTP server:

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`

## Example Conversation

- User: `hello`  
  Bot: `Hi, how can I help you today!`
- User: `what's your name`  
  Bot: `My name is Lucifer.`
- User: `bye`  
  Bot: `Goodbye! Have a great day!`
