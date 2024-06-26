import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Inter } from "next/font/google";
import BootstrapClient from './components/BootstrapClient';
import Template from './components/template';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bradley K Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Template>{children}</Template>
      <BootstrapClient />
      </body>
    </html>
  );
}
