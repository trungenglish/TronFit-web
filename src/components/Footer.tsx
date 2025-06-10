

export default function Footer() {
    return (
        <footer className="border-t border-zinc-700 py-12 text-center text-zinc-400 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg">&copy; {new Date().getFullYear()} TronFit AI. Đột phá mạnh mẽ cùng Lovable.</p>
        </div>
      </footer>
    );
}