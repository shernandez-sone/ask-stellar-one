# Plan: Configure the n8n chat workflow with `Bank Reconciliation Walk-Thru.docx`

Updated for the prewired workflow: chat trigger path/CORS, system prompt, vector tool name, and document metadata are already set. You only need to upload the DOCX into the vector store node once, execute it, and activate.

## Prerequisites
- Latest n8n with the provided workflow imported.
- OpenAI credential configured (ID already referenced in the workflow).
- The document available at `docs/Bank Reconciliation Walk-Thru.docx` on the n8n host.
- App origin in Chat Trigger CORS: `http://localhost:3000`, `http://localhost:4173`, plus your production host.

## One-time document load (embeddings)
1) Open the **In-Memory Vector Store** node.
2) In the **Document** section, click **Select/Add File** and upload `docs/Bank Reconciliation Walk-Thru.docx`.
3) Save, then **Execute Node** to build embeddings (metadata is already prefilled: source, company, document name).
4) Confirm the **Vector Store Tool** name is `bank_recon_docs` (already set) and remains connected to the agent.
5) Once the node executes successfully, activate the workflow. Re-run this step if you update the DOCX.

## Chat workflow path (already wired)
1) **Chat Trigger** (`bank-recon-demo` path) accepts messages from the widget; CORS is prefilled.
2) **AI Agent** uses the updated system prompt that references the bank reconciliation doc and requires tool-first answering.
3) **Vector Store Tool (`bank_recon_docs`)** queries the uploaded DOCX embeddings before responding.
4) **OpenAI Chat Model**: `gpt-4o-mini`, temp 0.3, max tokens 1500 (tune as needed).
5) **Window Buffer Memory** keeps the last 5 turns for context.
6) The final response is returned as the last node to the chat widget.

## Testing
1) Manually execute the vector store node once after uploading the DOCX.
2) Use **Execute Workflow** with a prompt like “Summarize the bank reconciliation walkthrough” and confirm grounded steps are returned.
3) Start the Next.js app (`npm run dev`), open `http://localhost:3000`, and verify the webhook shows the `bank-recon-demo` path.
4) Ask an out-of-scope question; the assistant should decline and note the doc is the primary source.

## Maintenance
- When the DOCX changes, re-upload in the vector store node and execute it once to refresh embeddings.
- Update Chat Trigger CORS when adding new environments.
- Adjust the system prompt or temperature in **AI Agent/OpenAI Chat Model** to refine tone and determinism.
