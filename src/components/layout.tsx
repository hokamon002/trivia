import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import TailwindIndicator from "@/components/tailwind-indicator";
import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/header";
import Head from "next/head";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name={siteConfig.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </div>
    </>
  );
};

export default RootLayout;
