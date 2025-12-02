'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

export default function ChatWidget({ webhookUrl }) {
  useEffect(() => {
    if (!webhookUrl) return;

    let cleanup;
    let cancelled = false;

    const mountChat = async () => {
      try {
        const { createChat } = await import('@n8n/chat');

        if (!createChat || cancelled) return;

        const instance = createChat({
          webhookUrl,
          target: '#n8n-chat',
          mode: 'fullscreen',
          showWelcomeScreen: true,
          initialMessages: [
            'Hey there! Ask me anything about this demo or the workflow behind it.'
          ],
          metadata: {
            source: 'n8n-chat-demo',
            sentAt: new Date().toISOString()
          }
        });

        cleanup = instance?.destroy;
      } catch (error) {
        console.error('Failed to mount chat widget', error);
      }
    };

    mountChat();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [webhookUrl]);

  return (
    <div className="chat-container">
      <div id="n8n-chat" aria-live="polite" />
    </div>
  );
}
