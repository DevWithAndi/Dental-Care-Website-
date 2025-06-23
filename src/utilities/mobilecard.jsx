function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="bg-black shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto p-4 bg-black">
        <p className="mb-4">Long content here...</p>
        <p className="mb-4">Scrolls independently on mobile.</p>
      </main>

      {/* Fixed Footer */}
      <footer className="bg-black p-4 border-t">© 2023 My App</footer>
    </div>
  );
}
export default AppLayout;
