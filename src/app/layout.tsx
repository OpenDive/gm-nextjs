import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Game',
    description: 'Interactive Game in Next 13'
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
