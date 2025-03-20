import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Quantum Proximity Gateway',
    default: 'Quantum Proximity Gateway',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNwdSI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB4PSI0IiB5PSI0IiByeD0iMiIvPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHg9IjkiIHk9IjkiIHJ4PSIxIi8+PHBhdGggZD0iTTE1IDJ2MiIvPjxwYXRoIGQ9Ik0xNSAyMHYyIi8+PHBhdGggZD0iTTIgMTVoMiIvPjxwYXRoIGQ9Ik0yIDloMiIvPjxwYXRoIGQ9Ik0yMCAxNWgyIi8+PHBhdGggZD0iTTIwIDloMiIvPjxwYXRoIGQ9Ik05IDJ2MiIvPjxwYXRoIGQ9Ik05IDIwdjIiLz48L3N2Zz4=" />
      </head>
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
          <SidebarProvider>
            <AppSidebar />
            {children}
          </SidebarProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
