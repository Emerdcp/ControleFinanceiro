# ControleFinanceiro

# 🧱 Arquitetura do sistema (ideal)

📁 controlefinanceiro/
│
├── site/
│   ├── imagens/
│   ├── css/
│   │   └── estilo.css
│   │
│   ├── js/
│   │   ├── app-contas.js
│   │   ├── app-bancos.js
│   │   └── api.js
│   │
│   ├── pages/
│   │   ├── contas.html
│   │   ├── bancos.html
│   │   └── dashboard.html
│   │
│   └── index.html
│
├── server.js   👈 backend fica aqui (raiz)
├── db.js
├── package.json


# ⚙️ 1. BACKEND (Node.js) – base do sistema

Você já vai usar isso (importantíssimo):

Node.js
Express
MySQL
📦 Instalação inicial

```
    npm init -y
    npm install express mysql2 cors dotenv react react-dom vite
    npm install concurrently
```

## 📌 server.js básico

```sql
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
```

# ⚛️ 2. FRONTEND (React)
📦 Criar projeto React
npx create-react-app frontend
cd frontend
npm start

ou melhor (mais moderno 👇):

npm create vite@latest frontend
cd frontend
npm install
npm run dev


# 🧱 Estrutura final (SEU PADRÃO + React)
controlefinanceiro/
│
├── site/               👈 FRONT (React)
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server.js           👈 BACKEND
├── db.js
├── package.json        👈 raiz (opcional)
🚀 PASSO 1 — Criar React dentro de site

Na raiz do projeto:

npm create vite@latest site

Escolhe:

React
JavaScript

Depois:

cd site
npm install
npm run dev
🔥 Teste

👉 http://localhost:5173

Se abrir React:
✔️ perfeito

🚀 PASSO 2 — Backend (já integrar com React)

Seu server.js já está quase pronto, só garantir:

app.use(cors());
app.use(express.json());
🚀 PASSO 3 — Conectar React com API
📌 Criar: site/src/services/api.js
const API = "http://localhost:3000";

export default API;