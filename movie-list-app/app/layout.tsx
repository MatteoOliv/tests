import styles from "./styles/page.module.scss";
import "./styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Movie List",
    description: "The awesome movie list app!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${inter.className} ${styles.mainBody}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
