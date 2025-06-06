

export default function Footer() {
    return (
        <footer className="border-t border-border py-12 text-center text-muted-foreground bg-card/30">
            <div className="max-w-6xl mx-auto px-6">
            <p className="text-lg">&copy; {new Date().getFullYear()} TronFit AI. Đột phá mạnh mẽ cùng Lovable.</p>
            </div>
        </footer>
    );
}