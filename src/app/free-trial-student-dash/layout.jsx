import Nav from "./components/Nav";

export default function FreeTrialLayout({
  children,
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Nav></Nav>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}