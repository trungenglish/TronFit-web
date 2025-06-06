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
            <body className="antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}