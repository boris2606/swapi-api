import { Montserrat } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={montserrat.className}>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
