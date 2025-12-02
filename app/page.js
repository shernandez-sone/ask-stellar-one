import ChatWidget from './components/chat-widget';

const webhookUrl = process.env.N8N_CHAT_URL ?? '';

export default function HomePage() {
  const webhookLabel = webhookUrl || 'not set';

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Next.js 16</p>
        <h1>Drop-in chat powered by your n8n workflow</h1>
        <p className="lede">
          Update <code>.env</code> with your workflow webhook URL, run the dev server, and talk to your bot
          instantly.
        </p>
        <div className="cta-row">
          <a
            className="button"
            href="https://www.npmjs.com/package/@n8n/chat"
            target="_blank"
            rel="noreferrer"
          >
            View @n8n/chat on npm
          </a>
          <span className="hint">
            Webhook: <strong className={webhookUrl ? 'webhook-set' : 'webhook-missing'}>{webhookLabel}</strong>
          </span>
        </div>
      </section>

      <section className="chat-panel">
        <ChatWidget webhookUrl={webhookUrl} />
        {!webhookUrl && (
          <p className="webhook-warning">
            Add <code>N8N_CHAT_URL</code> to your <code>.env</code> file and restart the dev server.
          </p>
        )}
      </section>
    </main>
  );
}
