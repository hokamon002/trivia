import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "@/lib/api";
import "@/styles/globals.css";
import RootLayout from "@/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
