import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Tourney&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
