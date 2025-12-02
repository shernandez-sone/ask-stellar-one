import './globals.css';

export const metadata = {
  title: 'n8n Chat Demo',
  description: 'Drop-in n8n chat widget configured via an env-driven webhook URL.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
