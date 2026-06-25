export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">
          🚧 Coming Soon
        </h1>

        <p className="text-gray-400 mb-6">
          Authentication is temporarily disabled while we prepare the first public release.
        </p>

        <a
          href="/tools"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 hover:bg-indigo-500 transition"
        >
          Continue Using AI Tools
        </a>
      </div>
    </main>
  );
}