import "./globals.css";


export const metadata = {
  title: "TheVorld ",
  description: "Dashboard for the TheVorld",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
