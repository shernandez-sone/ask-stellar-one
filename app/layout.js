import './globals.css';

export const metadata = {
  title: 'Stellar One Chat Preview',
  description: 'Brand-aligned n8n chat widget and iframe preview for Stellar One members.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
