# Nakama TypeScript Template

This project provides a clean and modern starting point for developing [Nakama](https://heroiclabs.com/docs/) server modules using **TypeScript**, **Rollup**, and **Docker**, with **Hot Reload** support during development.

> ✅ Suitable for multiplayer game backend logic, RPCs, match handlers, and more.

---

## 🚀 Features

- 📦 **TypeScript** support (strictly typed)
- ⚙️ **Rollup** for bundling into Nakama-compatible CommonJS format
- 🐳 **Docker + Docker Compose** for running Nakama and CockroachDB locally
- ♻️ **Hot Reload**: automatically rebuilds and reloads Nakama when your code changes
- 📂 Modular structure for RPCs and server logic
- ✅ Ready to use as a **template for new projects**

---

## 📁 Project Structure

```
nakama-template/
├── src/                    # TypeScript source files
│   ├── main.ts            # Entry point (InitModule)
│   └── rpc/
│       └── healthcheck.ts # Example RPC
├── build/                 # Rollup output (ignored in git)
├── docker-compose.yml     # Docker services
├── Dockerfile             # Custom Nakama build
├── local.yml              # Nakama configuration file
├── package.json
├── rollup.config.js
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 🛠 Requirements

- Node.js v14+ (tested on v22+)
- Docker & Docker Compose
- Git (optional for cloning as template)

---

## ⚙️ Setup

### 1. Clone this project

```bash
git clone https://github.com/your-username/nakama-template my-nakama-server
cd my-nakama-server
npm install
```

---

### 2. Start Development

In one terminal, start the TypeScript watcher with Rollup:

```bash
npm run dev
```

In a second terminal, enable hot-reloading via Nodemon:

```bash
npm run reload
```

In a third terminal, start Nakama with Docker:

```bash
docker-compose up
```

Now any changes you make in `src/` will rebuild and automatically reload Nakama!

---

## 🧪 Testing

Use Postman, curl, or the Nakama client SDK to call the test RPC:

```bash
curl -X POST http://localhost:7350/v2/rpc/healthcheck \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{}'
```

You should see:

```json
{"success": true}
```

---

## 📜 Scripts

| Command               | Description                                  |
|-----------------------|----------------------------------------------|
| `npm run dev`         | Watch & build using Rollup                   |
| `npm run reload`      | Restart Nakama container on JS changes       |
| `npm run build`       | One-time build into `build/index.js`         |
| `docker-compose up`   | Launch Nakama + CockroachDB                  |
| `docker-compose down` | Stop all containers                          |

---

## ♻️ Hot Reload Notes

To enable hot reload:
- The `build/` directory is mounted into Nakama container via Docker volume.
- On each rebuild (`npm run dev`), `build/index.js` updates.
- Nodemon watches `build/index.js` and restarts Nakama using `docker restart nakama1`.

You can configure this behavior in `nodemon.json`.

---

## 🛠 Creating a New Project from Template

There are 3 options:

### ✅ Option 1: GitHub Template (recommended)

Click `Use this template` on GitHub to scaffold a new repo.

### 👜 Option 2: Degit (clean copy)

```bash
npx degit your-username/nakama-template my-new-project
cd my-new-project
npm install
```

### 🛠 Option 3: Manual Copy

```bash
cp -r nakama-template/ my-new-project/
cd my-new-project
rm -rf .git
git init
npm install
```

---


## 🤝 Credits

Built using [Heroic Labs Nakama](https://heroiclabs.com/), a scalable open-source multiplayer game server.