import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Design',
};

export default function SystenDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}