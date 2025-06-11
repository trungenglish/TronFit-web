import Header from "@components/Header";
import './globals.css'
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased" suppressHydrationWarning>
                <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden"
                    style={{
                        fontFamily: '"Inter", "Segoe UI", sans-serif',
                    }}>
                    <Header />
                    {children}
                    <Footer />
                </div>   
            </body>
        </html>
    );
}