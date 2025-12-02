import ChatWidget from './components/chat-widget';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { TestInstructions } from './components/test-instructions';

const webhookUrl = process.env.N8N_CHAT_URL ?? '';

export default function HomePage() {
  const webhookLabel = webhookUrl || 'not set';
  const webhookReady = Boolean(webhookUrl);

  return (
    <main className="page">
      <div className="column column--left">
        <section className="hero">
          <div className="hero__eyebrow">Stella | Member Acumatica Integration Support</div>
          <h1>Member-ready chat powered by your n8n workflow</h1>
          <p className="hero__lede">
            Stella is ready for internal validation. Run your Acumatica support flows here and confirm off-topic requests
            are declined before members see it.
          </p>

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
                <p className="checklist__title">Chat like a member</p>
                <p className="checklist__copy">
                  Use the widget to validate tone, responses, and metadata before launch.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <TestInstructions />
      </div>

      <Card className="chat-card">
        <div className="chat-card__header">
          <div>
            <p className="eyebrow eyebrow--muted">Live preview</p>
            <h2>Chat widget / iframe</h2>
            <p className="chat-card__lede">
              Stella styling and the n8n welcome screen are in place. This build is for internal QA—run through the flows
              here before any members see it.
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
