export const metadata = {
    title: 'Game',
    description: 'GM Demo'
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return <div>{children}</div>;
}
