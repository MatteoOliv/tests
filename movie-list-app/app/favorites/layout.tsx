import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Favorite movies",
    description: "Your favorite movies!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
