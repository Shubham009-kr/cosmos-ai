# COSMO — Space Intelligence Chatbot

COSMO is a domain-specific AI chatbot focused on space, astronomy, and cosmology.
It is designed to provide an engaging conversational experience with a purpose-built UI rather than a generic chat interface.

---

## 🚀 Features

* **Domain-focused chatbot** — answers only space-related queries
* **Custom UI/UX** — designed to reflect a space theme and improve usability
* **Guided prompts** — helps users start meaningful conversations quickly
* **Responsive design** — optimized for both desktop and mobile
* **Mobile sidebar drawer** — smooth navigation on smaller screens
* **Typing indicator & loading states** — improves conversational feedback
* **Auto-resizing input box** — better typing experience

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **AI Integration:** Groq API (OpenAI-compatible endpoint)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   ├── ChatWindow.jsx
│   ├── InputBox.jsx
│   └── Starfield.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cosmo-ai.git
cd cosmo-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root directory:

```
VITE_GROQ_API_KEY=your_api_key_here
```

### 4. Run the application

```bash
npm run dev
```

---

## 🧠 Design Decisions

* The chatbot is **domain-restricted** to maintain relevance and avoid generic responses.
* UI components are **modular and reusable**, separating logic from presentation.
* The sidebar is implemented as a **controlled drawer on mobile** to optimize screen space.
* A **welcome state with suggestions** reduces friction for first-time users.

---

## ⚠️ Note

This project uses a frontend-only API integration for demonstration purposes.
In a production environment, API calls should be routed through a backend service to securely manage API keys.

---

## 🌐 Deployment

The application can be deployed on platforms like Vercel or Netlify.

---

## 📌 Future Improvements

* Streaming responses for real-time typing effect
* Chat history persistence (local storage or database)
* Backend proxy for secure API handling
* Enhanced animations and micro-interactions

---

## 👨‍💻 Author

Shubham Kumar
Full Stack Developer
