import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testing',
};

export default function TestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}