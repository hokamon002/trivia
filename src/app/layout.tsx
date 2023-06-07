import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import TailwindIndicator from "@/components/tailwind-indicator";
import ThemeProvider from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <ClerkProvider>
                <Header />
                <div className="flex-1">{children}</div>
              </ClerkProvider>
            </div>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
