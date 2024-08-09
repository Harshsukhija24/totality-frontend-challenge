import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./provider";
import ReduxProvider from "./Redux/Provider"; // Adjust the path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "totality-frontend-challenge",
  description: "created by Harsh Sukhija",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
