import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementation',
};

export default function ImplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}