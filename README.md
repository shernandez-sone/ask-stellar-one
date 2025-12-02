# n8n Chat Demo (Next.js 16)

Drop-in Next.js web app that embeds the `@n8n/chat` widget and talks to a simple n8n workflow. Update one `.env` value with your webhook URL, import the provided workflow, and you have a working proof-of-concept.

## What’s included
- Next.js 16 App Router build with a pre-styled landing page and chat surface (`app/`)
- Client component that lazy-loads `@n8n/chat` with your webhook and custom metadata (`app/components/chat-widget.jsx`)
- Global theme overrides to style the widget and page (`app/globals.css`)
- Ready-to-import workflow file with a `Chat Trigger` and scripted response (`n8n-chat-workflow.json`)

## Quick start
1) Create your `.env` (or `.env.local`) file:
```bash
cp .env.example .env
```
Set `N8N_CHAT_URL` to your workflow webhook, e.g. `https://your-workspace.app.n8n.cloud/webhook/chat-demo`.

2) Install dependencies:
```bash
npm install
```

3) Run the dev server:
```bash
npm run dev
```
Visit http://localhost:3000 to open the chat widget. The webhook shown on the page is read directly from `.env`.

4) Build for production (optional):
```bash
npm run build
npm start
```

## Configure the n8n workflow
1) Import `n8n-chat-workflow.json` into n8n (Import from File).
2) Open the **Chat Trigger** node:
   - `Path`: `chat-demo` (keep in sync with your `.env` URL).
   - `Allowed Origins (CORS)`: add `http://localhost:3000` (and your production host when deploying).
   - Keep **Response Mode** as `Last node` so the final node’s output is returned to the chat widget.
3) The **Prepare Response** Function node echoes the user’s message without external APIs. Activate the workflow to test immediately.
4) Want LLM answers? Replace **Prepare Response** with an **OpenAI Chat Model** node (or another model node):
   - Connect it after **Chat Trigger**.
   - Use `{{$json.chatInput}}` as the user message.
   - Add your model credentials in n8n.
   - Ensure the last node outputs `text` or `message` so the widget can render it.
5) Activate the workflow. The `@n8n/chat` widget will hit `N8N_CHAT_URL?action=sendMessage` under the hood.

## How the Next.js app works
- The landing page is rendered on the server and reads `process.env.N8N_CHAT_URL`, so secrets stay server-side.
- A client-only component lazy-loads `createChat` from `@n8n/chat` and mounts it into `#n8n-chat`.
- CSS variables in `app/globals.css` theme both the landing page and the chat widget.

## Notes & troubleshooting
- If you see “not set” for the webhook in the UI, update `.env` and restart `npm run dev`.
- The provided workflow responds immediately without credentials. For production, swap in your own logic and model nodes.
- When deploying, set `N8N_CHAT_URL` to the fully qualified webhook URL exposed by your n8n instance and add that origin to the Chat Trigger’s CORS list.
