import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./[pageComponents]/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neeranjan Bhardwaj",
  description: "A simple portfoilo made by Neeranjan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
