import ChatWidget from './components/chat-widget';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';

const webhookUrl = process.env.N8N_CHAT_URL ?? '';

export default function HomePage() {
  const webhookLabel = webhookUrl || 'not set';
  const webhookReady = Boolean(webhookUrl);

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__eyebrow">Stellar One | Member Support</div>
        <h1>Member-ready chat powered by your n8n workflow</h1>
        <p className="hero__lede">
          Keep the Stellar One look and feel while you test the widget or iframe. Point the chat at your workflow
          webhook and start responding to members in real time.
        </p>

        <div className="cta-row">
          <Button variant="primary" href="https://www.npmjs.com/package/@n8n/chat" target="_blank" rel="noreferrer">
            Get the @n8n/chat package
          </Button>
          <Button
            variant="secondary"
            href="https://docs.n8n.io/integrations/builtin/chat/"
            target="_blank"
            rel="noreferrer"
          >
            View chat setup guide
          </Button>
        </div>

        <Card className="status-card">
          <Badge variant={webhookReady ? 'success' : 'info'}>
            {webhookReady ? 'Webhook connected' : 'Webhook missing'}
          </Badge>
          <div>
            <p className="status-label">{webhookReady ? 'Currently sending to' : 'Next step'}</p>
            <p className="status-value">
              {webhookReady ? webhookLabel : 'Set N8N_CHAT_URL in .env.local and restart the dev server.'}
            </p>
          </div>
        </Card>

        <div className="checklist">
          <Card className="checklist-card">
            <span className="checklist__dot" aria-hidden="true" />
            <div>
              <p className="checklist__title">Add your webhook</p>
              <p className="checklist__copy">
                Set <code>N8N_CHAT_URL</code> to your Chat Trigger webhook URL from n8n.
              </p>
            </div>
          </Card>
          <Card className="checklist-card">
            <span className="checklist__dot" aria-hidden="true" />
            <div>
              <p className="checklist__title">Restart locally</p>
              <p className="checklist__copy">
                Run <code>npm run dev</code> so the new env value is picked up.
              </p>
            </div>
          </Card>
          <Card className="checklist-card">
            <span className="checklist__dot" aria-hidden="true" />
            <div>
              <p className="checklist__title">Chat like a member</p>
              <p className="checklist__copy">
                Use the widget below to validate tone, responses, and metadata before launch.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Card className="chat-card">
        <div className="chat-card__header">
          <div>
            <p className="eyebrow eyebrow--muted">Live preview</p>
            <h2>Chat widget / iframe</h2>
            <p className="chat-card__lede">
              Stellar One styling, rounded edges, and the n8n welcome screen make this ready for a member-facing proof of
              concept.
            </p>
          </div>
          <div className="tag-row" aria-hidden="true">
            <span className="tag">Fullscreen widget</span>
            <span className="tag">Brand palette</span>
            <span className="tag">Metadata ready</span>
          </div>
        </div>

        <CardContent className="chat-panel">
          <ChatWidget webhookUrl={webhookUrl} />
          {!webhookReady && (
            <p className="webhook-warning">
              Add <code>N8N_CHAT_URL</code> to your <code>.env.local</code> file and restart the dev server.
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
